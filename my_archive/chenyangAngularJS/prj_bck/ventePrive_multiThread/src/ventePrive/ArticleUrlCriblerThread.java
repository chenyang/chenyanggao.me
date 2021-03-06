package ventePriveMultiThread;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map.Entry;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class ArticleUrlCriblerThread implements Runnable{

	private Element artEl;
	private String markCode;
	
	public ArticleUrlCriblerThread(Element el, String markCode){
		this.artEl = el;
		this.markCode = markCode;
	}
	
	private void analyzePageExpressElements() throws IOException{
		String href4Express = artEl.select(".infoExpressBt").attr("hrefExpress");
		String[] temps = href4Express.split("/");
		String pfid = temps[temps.length-1]; // get product family id
		//System.out.println("  "+href4Express+", "+pfid);
		
		//this block take some time..
		//element express page
		Document typeOneExpressPage = Jsoup.connect("http://fr.vente-privee.com"+href4Express).get();
		List<MapperPidPfid> listMapper = new ArrayList<MapperPidPfid>();
		Elements models = typeOneExpressPage.select("#model >option");
		if(!models.isEmpty()){ //if multi-model product:
			for(Element model:models){
				String pid = model.attr("value");
				MapperPidPfid mapper = new MapperPidPfid();
				mapper.setPid(pid);
				mapper.setPfid(pfid);
				listMapper.add(mapper);
			}
		}else{//if no models to choose.. if single product..
			pfid = typeOneExpressPage.select("#singleProduct").attr("productfamilyid");
			String pid= typeOneExpressPage.select("#singleProduct").attr("productid");
			MapperPidPfid mapper = new MapperPidPfid();
			mapper.setPid(pid);
			mapper.setPfid(pfid);
			listMapper.add(mapper);
		}

		//add to panier
		
		for(MapperPidPfid mapper: listMapper){
			mapper.setMarkCode(markCode);
			String pid = mapper.getPid();
			pfid = mapper.getPfid();
			
			//mock
			//SingletonShare.getInstance().addOneItemToBoughtItems(mapper);			
			
			//real call ws to buy items
			callWsToBuyItem(mapper, pid, pfid);
			
		}
	}
	
	private void callWsToBuyItem(MapperPidPfid mapper, String pid, String pfid){
		//REAL invoke ws call
		if(!pid.equals(pfid)){ //just when PID!=PFID
			try{
				System.out.print("  Analyzed Mapping: PID="+pid+", PFID="+pfid+", MARK code="+markCode+"; ");
				System.out.print("  Waiting for "+(SingletonShare.SLEEP_BUY)+" mills to call VP ws..;  ");
				Thread.sleep(SingletonShare.SLEEP_BUY);
				Connection connection = Jsoup.connect("http://fr.vente-privee.com/cart/CartServices/AddToCartOrCanBeReopened");
				for (Entry<String, String> cookie : SingletonShare.getInstance().getLoginCookies().entrySet()) {
					connection.cookie(cookie.getKey(), cookie.getValue());
				}
				Document doc = 
						connection
						.data("pid", pid)
						.data("pfid", pfid)
						.data("q", "1")
						.ignoreContentType(true)
						.post();
				
				if(!doc.body().text().isEmpty()){
					JsonParser parser = new JsonParser();
					JsonObject o = (JsonObject)parser.parse(doc.body().text());
					String desc = o.get("Description").toString();

					if(desc.toLowerCase().contains("success")){//if succeed to buy item
						//add one bought item
						SingletonShare.getInstance().getBoughtItems().add(mapper);
						System.out.print("added to bought items in panier:[PID="+pid+",PFID="+pfid+"]; ");
					}else{
						System.out.print("Sold out or system error;  ");
					}
					System.out.print("SERVER RESPONSE:"+doc.body().text()+";");
				}else{
					System.out.print("NO SERVER RESPONSE..");
				}
				System.out.println();
			}catch(IOException e){
				System.out.println("IOEXCEPTION: "+ e.toString());
				//callWsToBuyItem(MapperPidPfid mapper, String pid, String pfid);
			}catch(InterruptedException e){
				e.printStackTrace();
			}
		}
	}
	
	@Override
	public void run() {
		try{
			analyzePageExpressElements();
		}catch(Exception e){
			e.printStackTrace();
		}
	}

}
