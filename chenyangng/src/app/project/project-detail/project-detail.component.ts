import { Component, OnInit, Input} from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import {ProjectCard, Project} from '../project';
import { ProjectService } from '../../project.service';
import { SideBar } from '../sideBar';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() chosenProjectCard: ProjectCard;
   sideBarList:Array<SideBar>;

  constructor(
    private route:ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) { }

  getHero(): void{
    var id = this.route.snapshot.paramMap.get("id");
    this.chosenProjectCard = this.projectService.getProjectCardList().find(projectCard=>projectCard.id===id);
  }

  getSideBarList():Array<SideBar> {
    var result = [];
    result =
    [
      {
        'id':'michelin',
        'desc':'MICHELIN® solutions',
        'content':'J2EE web dashboard development',
        'link':'views/Michelin.html',
        'active':false
      },
      {
        'id':'findevent',
        'desc':'Music Event',
        'content':'Big Data and Semantic web application for music',
        'link':'views/FindEvent.html',
        'active':false
      },
      {
        'id':'iovision',
        'desc':'RIA IOvision',
        'content':'Small Business ERP Prototype & system integration',
        'link':'views/IOvision.html',
        'active':false
      },
      {
        'id':'asa',
        'desc':'ASA QLIMS',
        'content':'PhoneGap Tablet prototype',
        'link':'views/ASA.html',
        'active':false
      },
      {
        'id':'uvsp',
        'desc':'UVSP',
        'content':'.NET Framework Devc',
        'link':'views/UVSP.html',
        'active':false
      },
      {
        'id':'pollaroid',
        'desc':'POLLAROID',
        'content':'iOS development',
        'link':'views/Pollaroid.html',
        'active':false
      },
      {
        'id':'french_airline',
        'desc':'French Airline',
        'content':'Algorithm in C',
        'link':'views/French_Airline.html',
        'active':false
      },
      {
        'id':'stadium',
        'desc':'Service Management System',
        'content':'Web Based CMS',
        'link':'views/Stadium.html',
        'active':false
      },
      {
        'id':'expernova',
        'desc':'Expernova',
        'content':'Social Network Integration',
        'link':'views/Expernova.html',
        'active':false
      },
      {
        'id':'allons_y',
        'desc':'Allons-y Francais',
        'content':'French Teaching Video',
        'link':'views/Allons-y.html',
        'active':false
      },
      {
        'id':'good_deed_movement',
        'desc':'Good Tracking Service',
        'content':'PHP Forum development',
        'link':'views/Good_Deed_Movement.html',
        'active':false
      },
      {
        'id':'slab',
        'desc':'SLAB',
        'content':'Java Based Resource Planning System',
        'link':'views/SLAB.html',
        'active':false
      },
      {
        'id':'euronext',
        'desc':'Euronext',
        'content':'European Enterprises analysis',
        'link':'views/Euronext.html',
        'active':false
      },
      {
        'id':'mail_system',
        'desc':'Simple Chat',
        'content':'-C based mailing system',
        'link':'views/Mail_System.html',
        'active':false
      }
  ];
    return result;
  }

  ngOnInit() {
    this.getHero();
    this.sideBarList = this.getSideBarList();
  }

}
