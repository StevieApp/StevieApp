import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  portfolios = [
    {
      imageurl: "../../../assets/reap.png",
      title: "Reap Web",
      type: "E-commerce",
      description: "Trading and Information platform for Farmers. Grocery shop for buyers. Using NodeJS, MongoDB (Admin and Pipelines), AWS Architecture (EC2, Loadbalancer), CloudFunctions, AngularJS",
      text: "Visit",
      link: "https://reapweb.com"
    },
    {
      imageurl: "../../../assets/eventer.png",
      title: "Eventer",
      type: "Event Planning",
      description: "Event venue booking and posting. Using Java, Hibernate, MySQL, JSP",
      text: "Visit",
      link: "https://eventer254.herokuapp.com/"
    },
    {
      imageurl: "../../../assets/tripplanner.png",
      title: "Trip Planner",
      type: "Event Planning",
      description: "Trip Planning and Organizing Mobile & iOS application. Using Ionic, Firebase Functions, API Payment Integration",
      text: "View Source Code",
      link: "https://github.com/StevieApp/TripPlanner"
    },
    {
      imageurl: "../../../assets/nodejs.svg",
      title: "Firebase Functions",
      type: "NodeJS API",
      description: "NodeJS API supporting an Angular Application. Using NodeJS, AngularJS, Firebase Functions, AWS S3",
      text: "View Source Code",
      link: "https://bitbucket.org/STEVE31/forkedreap/src/master/"
    },
    {
      imageurl: "../../../assets/CEH.jpg",
      title: "CEH",
      type: "Simple Shell and Bash Scripts",
      description: "Simple Shell and Python scripts for functions like port scanning, file finding, simple socket creation etc.",
      text: "View Source Code",
      link: "https://github.com/StevieApp/CEH/tree/master"
    },
    {
      imageurl: "../../../assets/amvgmv.png",
      title: "Logo Animation",
      type: "Logo Creation and Animation",
      description: "Simple company logo using Photoshop. Intro and Outro using Adobe Premiere.",
      text: "Watch Video",
      link: "https://youtu.be/dwHPmu53kiM"
    }
  ] 

}
