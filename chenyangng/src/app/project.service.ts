import { Injectable } from '@angular/core';
import {ProjectCard} from './project/project';
import { SideBar } from './project/sideBar';

@Injectable()
export class ProjectService {

  /** get side bar list **/

  getSideBarList(): Array<SideBar> {
    let result = [];
    result =
    [
      {
        'id': 'michelin',
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
        'content': 'Algorithm in C',
        'link': 'views/French_Airline.html',
        'active': false
      },
      {
        'id': 'stadium',
        'desc': 'Service Management System',
        'content': 'Web Based CMS',
        'link': 'views/Stadium.html',
        'active': false
      },
      {
        'id': 'expernova',
        'desc': 'Expernova',
        'content': 'Social Network Integration',
        'link': 'views/Expernova.html',
        'active': false
      },
      {
        'id': 'allons_y',
        'desc': 'Allons-y Francais',
        'content': 'French Teaching Video',
        'link': 'views/Allons-y.html',
        'active': false
      },
      {
        'id': 'good_deed_movement',
        'desc': 'Good Tracking Service',
        'content': 'PHP Forum development',
        'link': 'views/Good_Deed_Movement.html',
        'active': false
      },
      {
        'id': 'slab',
        'desc': 'SLAB',
        'content': 'Java Based Resource Planning System',
        'link': 'views/SLAB.html',
        'active': false
      },
      {
        'id': 'euronext',
        'desc': 'Euronext',
        'content': 'European Enterprises analysis',
        'link': 'views/Euronext.html',
        'active': false
      },
      {
        'id': 'mail_system',
        'desc': 'Simple Chat',
        'content': '-C based mailing system',
        'link': 'views/Mail_System.html',
        'active': false
      }
  ];
    return result;
  }

  /** get project card list */
  getProjectCardList(): ProjectCard[]{
    return [
      {
        id: "michelin",
        desc: "MICHELIN® solutions",
        content: "J2EE web dashboard development",
        link: "views/Michelin.html",
        active: false,
        titleDesc: "internship project | spring 2014 | French",
        headerDesc: "@{MICHELIN® solutions}",
        devDesc: "J2EE Dashboard development",
        descParagraph: 'In the context of the project "Connected vehicles" (MICHELIN® solutions & Worldline), I was responsible for conceptualizing, developing, testing and integrating administrative components in "Dashboard" module, which assist support team supervise and diagnose the "Fleet administration platform"',
        imgUrl: "assets/images/projects_images/Michelin.png",
        keyWords: [
          "Java/J2EE & Web services",
          "BI Components & Dashboard",
          "Connected objects & Data analysis",
          "Cross-platform intg"
        ]
      },
      {
        id: "findevent",
        desc: "Music Event",
        content: "Big Data and Semantic web application for music",
        link: "views/FindEvent.html",
        active: false,
        titleDesc: "school project | winter 2013 | French",
        headerDesc: "@{MusicEvent}",
        devDesc: "Big Data & semantic web application",
        descParagraph: 'Inspired by big data technologies and AngularJS Framework, our team has realized a semantic web application that helps users to find and retrieve information about music events that will be held in the city. I was responsible for architecture design, AngularJS framework and JAX-RS implementation',
        imgUrl: "assets/images/projects_images/FindEvent.png",
        keyWords: ["AngularJS", "HTML/CSS/Bootstrap", "Web Semantic", "Big Data", "SPARQL", "JEE Web Service (JAX-RS)"]
      },
      {
        id: "iovision",
        desc: "RIA IOvision",
        content: "Small Business ERP Prototype & system integration",
        link: "views/IOvision.html",
        active: false,
        titleDesc: "internship&job project | summer 2013 | French",
        headerDesc: "@{RIA IOvision}",
        devDesc: "Business ERP Prototype & System integration",
        descParagraph: "This internship and job's mission was to research, modelize and develop a Rich Client prototype for company's current ERP 'IOvision'. Instructed by lead system engineer, I successfully integrated the prototpe by using AngularJS Framework with a new layer of JEE Web Services.",
        imgUrl: "assets/images/projects_images/IOvision.jpg",
        keyWords: ["AngularJS", "HTML5/CSS3/Twitter Bootstrap", "Unit test", "Responsive design", "JEE Web Service technologies"]
      },
      {
        id: "asa",
        desc: "ASA QLIMS",
        content: "PhoneGap Tablet prototype",
        link: "views/ASA.html",
        active: false,
        titleDesc: "enterprise project | spring 2013 | French",
        headerDesc: "@{ASA QLims}",
        devDesc: "Tablet Prototype for Laboratory System",
        descParagraph: "Our team constructed a prospective prototype including multi-platform supports, QR codes, email and web services for ASA, a Montpellier-based laboratory system provider. I established the system architecture and implemented core javascript part that associate RESTFul web service and UI.",
        imgUrl: "assets/images/projects_images/ASA-2.png",
        keyWords: ["Javascript", "PhoneGap", "JQueryMobile", "XDK", "Restful API"]
      },
      {
        id: "uvsp",
        desc: "UVSP",
        content: ".NET Framework Devc",
        link: "views/UVSP.html",
        active: false,
        titleDesc: "course project | winter 2012 | French",
        headerDesc: "@{UVSP}",
        devDesc: ".NET MVC based course management system",
        descParagraph: "Based on the previous project result, during this short-time project our group realised a functional university source planning system based on .NET MVC4 technology. I provided all web api programming and testing works and 2 parts of CMS. (reservation and courses management).",
        imgUrl: "assets/images/projects_images/UVSP.png",
        keyWords: ["Web API", ".NET MVC4  C#", "Visual Studio 2012 Express", "Entity Framework", "jQuery, CSS3, HTML5, Bootstrap"]
      },
      {
        id: "pollaroid",
        desc: "POLLAROID",
        content: "iOS development",
        link: "views/Pollaroid.html",
        active: false,
        titleDesc: "intern project | summer 2012 | English",
        headerDesc: "@{POLLAROID}",
        devDesc: "Social Network iOS Development",
        descParagraph: 'My internship in Singapore worked with designer and Database developer, we built a working prototype for alpha testing of iOS application "Pollaroid". During my internship, I held full responsibility for app Object-C (Cocoa Touch) development. ',
        imgUrl: "assets/images/projects_images/Pollaroid.png",
        keyWords: ["iOS Development", "Storyboard", "SNS Integration", "Requirements Analysis", "XCode"]
      },
      {
        id: "french_airline",
        desc: "French Airline",
        content: "Algorithm in C",
        link: "views/French_Airline.html",
        active: false,
        titleDesc: "course project | spring 2011 | French",
        headerDesc: "@{French Airline}",
        devDesc: "GPS Data Analyser on Google Map",
        descParagraph: "Given reality data of GPS position and population information in France(.cvs), our team revealed shortest path and minimum flight cover between cities in France by offering the optimized solutions on Google Map. I led the algorithm analyse and provided core C programming works.",
        imgUrl: "assets/images/projects_images/French_airline.png",
        keyWords: ["C programming", "Algorithm Analysis & Optimization", "HTML programming", "GoogleMap API Integration"]
      },
      {
        id: "stadium",
        desc: "Service Management System",
        content: "Web Based CMS",
        link: "views/Stadium.html",
        active: false,
        titleDesc: "academic project | winter 2008 - spring 2009 | Chinese",
        headerDesc: "@{Service Management System}",
        devDesc: "Web Based CMS For FengTai Stadium",
        descParagraph: "Our team of four applied the academic project organized by CUEB, during my undergraduate years. The project was a web based CMS realized by using technology JSP MVC Model2 with Tomcat as Application Server. I was responsible for core JSP and Servlet programing and Database modeling.",
        imgUrl: "assets/images/projects_images/STADIUM.png",
        keyWords: ["J2EE Development", "UI Design & Requirements Analysis", "SQL Server 2005", "System Design & Modeling"]
      },
      {
        id: "expernova",
        desc: "Expernova",
        content: "Social Network Integration",
        link: "views/Expernova.html",
        active: false,
        titleDesc: "entreprise project | spring 2012 | French",
        headerDesc: "@{Expernova}",
        devDesc: 'Development of "viralite Web"',
        descParagraph: "In respond to our client Expernova, a local business during our industrial project period, our team created social tools for Expernova's secondary website: 'www.scientificprofile.com' to expand its popularity. I was responsible for linkedIn and Mandeley integration.",
        imgUrl: "assets/images/projects_images/Expernova.png",
        keyWords: ["Social Network Integration & Development", "Web Development"]
      },
      {
        id: "allons_y",
        desc: "Allons-y Francais",
        content: "French Teaching Video",
        link: "views/Allons-y.html",
        active: false,
        titleDesc: "intern project | spring 2010 | Chinese + French",
        headerDesc: "@{Allons-y Francais}",
        devDesc: "French Teaching Videos For Allons-y",
        descParagraph: "During my internship in Allons-y Francais, besides the work done on CSS and Javascript, with the assistance of my instructor, I recorded and fixed French teaching videos of the school using Adobe Premiere combined with ppt files.",
        imgUrl: "assets/images/projects_images/Allons-y.png",
        keyWords: ["Video Fixing and Recording", "Web Development", "French communication", "Image fixing"]
      },
      {
        id: "good_deed_movement",
        desc: "Good Tracking Service",
        content: "PHP Forum development",
        link: "views/Good_Deed_Movement.html",
        active: false,
        titleDesc: "job project | winter 2011 | English",
        headerDesc: "@{Good Tracking Service}",
        devDesc: "Forum Construction for NPO in Chicago",
        descParagraph: "Worked as a part time web Developer, I reconstructed 3 portions of the website for NPO in Chicago Good Deed Movement': Good Tracking service (Forum with Google Position API embedded), Suggestion portion and Printable Material (Automatic ticks generation)page. ",
        imgUrl: "assets/images/projects_images/Good_Deed_Movement.png",
        keyWords: ["PHP development", "Database Design", "Server Configuration", "GoogleMap API Integration", "UI Design"]
      },
      {
        id: "slab",
        desc: "SLAB",
        content: "Java Based Resource Planning System",
        link: "views/SLAB.html",
        active: false,
        titleDesc: "course project | spring 2012 | French",
        headerDesc: "@{'SLAB'}",
        devDesc: "Java based UM2 Time Scheduling System",
        descParagraph: "Our team worked out a Java Swing based time scheduling application for University of Montpelier 2. Worked with our client, we started from requirement analysis, UML design, PL/SQL implementation of Oracle and Java Swing programming works and finally with JUnit test. I was totally responsible for Java Swing and DAO Programming.",
        imgUrl: "assets/images/projects_images/SLAB.png",
        keyWords: ["Requirements Analysis", "UML design", "Java development", "Design Pattern", "Database Development"]
      },
      {
        id: "euronext",
        desc: "Euronext",
        content: "European Enterprises analysis",
        link: "views/Euronext.html",
        active: false,
        titleDesc: "course project | winter 2011 | French",
        headerDesc: "@{Euronext}",
        devDesc: "European Entreprise Analyse",
        descParagraph: "The project aims at researching and discovering the relationship between  enterprise category and their social responsibility both in Paris and in Brussels. During the project, I adpated web spider program from Java to PHP and created database model.",
        imgUrl: "assets/images/projects_images/Euronext.png",
        keyWords: ["PL/SQL Development", "Web Development", "Statistic Analysis", "Database modeling", "Requirement & Solution analysis"]
      },
      {
        id: "mail_system",
        desc: "Simple Chat",
        content: "-C based mailing system",
        link: "views/Mail_System.html",
        active: false,
        titleDesc: "course project | spring 2012 | French",
        headerDesc: "@{Simple Chat}",
        devDesc: "C Based Mail Sending System",
        descParagraph: "Worked in pairs, we implemented a small system written in C for sending, responding and managing mails with C/S model. I was mainly responsible for local and client side programming in C.",
        imgUrl: "assets/images/projects_images/Mail_System.png",
        keyWords: ["C programming", "TCP/IP", "Socket Programming"]
      }
    ];

  }

  constructor() { }

}
