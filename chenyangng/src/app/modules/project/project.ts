/**
 * Created by Administrateur on 30/03/2017.
 */
/**
 * Created by Administrateur on 29/03/2017.
 */
export class ProjectSchema {
    id: string;
    desc: string;
    content: string;
    link: string;
    active: boolean;

    constructor(args: ProjectSchema) {
    this.id = args.id;
    this.desc = args.desc;
    this.content = args.content;
    this.link = args.link;
    this.active = args.active;
  }
}

export class Project extends ProjectSchema {
  // adding some additional functions for user
}

export class ProjectCard extends ProjectSchema {
    titleDesc: string;
    headerDesc: string;
    devDesc: string;
    imgUrl: string;
    descParagraph: string;
    keyWords: Array<string>;
}
