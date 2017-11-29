import { Component, OnInit } from "@angular/core";
import { ProjectCard, Project } from "../project";
import { ProjectService } from "../../project.service";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: [
    "../../css/home.css",
    "../../css/projects.css",
    "../../css/index.css",
    "../../css/bootstrap/css/bootstrap.min.css",
    "../../css/reset.css"
  ]
})
export class ProjectCardComponent implements OnInit {
  selectedProjectCard: ProjectCard;
  projectList: Array<any>;

  constructor(
    private projectService: ProjectService
  ) {}

  // method define
  directLink = function(link: string) {
    // TODO go to fixed page
  };

  onSelect(projectCard: ProjectCard): void{
    this.selectedProjectCard = projectCard;
  }

  ngOnInit() {
    this.projectList = this.projectService.getProjectCardList();
  }
}
