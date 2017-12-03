import { Component, OnInit, Input} from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import {ProjectCard, Project} from '../project';
import { ProjectService } from '../../project.service';
import { SideBar } from '../sideBar';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ["./project-detail.component.css", "../../css/projects_detail.css"]
})
export class ProjectDetailComponent implements OnInit {

  @Input() chosenProjectCard: ProjectCard;
   sideBarList: Array<SideBar>;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) { }

  getProjectDetail(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.chosenProjectCard = this.projectService.getProjectCardList().find(projectCard=>projectCard.id===id);
  }

  getSideBarList(): Array<SideBar>{
    return this.projectService.getSideBarList();
  }

  ngOnInit() {
    this.getProjectDetail();
    this.sideBarList = this.getSideBarList();
  }

}
