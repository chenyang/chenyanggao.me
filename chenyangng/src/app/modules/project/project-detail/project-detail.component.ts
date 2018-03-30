import {Type} from '@angular/core/src/type';
import {ProjectService} from '../../../service/project.service';
import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import { ProjectDirective } from '../../../directive/project-directive.directive';
import { GoodDeedMovementComponent } from '../good-deed-movement/good-deed-movement.component';
import { AllonsyComponent } from '../allonsy/allonsy.component';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MichelinComponent } from '../michelin/michelin.component';
import { ProjectCard } from '../../../model/project';
import { SideBar } from '../../../model/sideBar';
import { NgbTabChangeEvent, NgbTabset } from '@ng-bootstrap/ng-bootstrap/tabset/tabset';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ["./project-detail.component.css", "../../../css/projects_detail.css"]
})
export class ProjectDetailComponent implements OnInit, AfterViewInit {
  [x: string]: any;

  @Input() chosenProjectCard: ProjectCard;
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicContainer: ViewContainerRef;
  @ViewChild('tabCompo') tabCompo :NgbTabset;
  sideBarList: Array<SideBar>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }


  getProjectDetail(id: String): void {
    this.chosenProjectCard = this.projectService.getProjectCardList().find(projectCard=>projectCard.id===id);
    this.loadComponent(this.chosenProjectCard.component);
  }

  onSelectSideBar($event: NgbTabChangeEvent) :void {
    //get pId from chosen tab
    let pId = $event.nextId;
    let chosenSideBar:SideBar = this.sideBarList.find(sideBarObj=>sideBarObj.id==pId);

    if(chosenSideBar && pId){//change route, but does not do something..
      this.router.navigate(['detail', pId]);
      this.loadComponent(chosenSideBar.component);
    }
  }

  loadComponent(component: any): void{
    if(component!=null){
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      let viewContainerRef = this.dynamicContainer;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);
      //if needed, interact with ref of componentRef
    }
  }

  getSideBarList(): Array<SideBar>{
    return this.projectService.getSideBarList();
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.getProjectDetail(id);
    this.sideBarList = this.getSideBarList();
  }

  ngAfterViewInit(){
    //important! only After view Init
    let id = this.route.snapshot.paramMap.get("id");
    this.tabCompo.select(id)//select tab
  }

}
