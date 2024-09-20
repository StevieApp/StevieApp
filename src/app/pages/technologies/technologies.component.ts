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
      imageurl: "../../../assets/devmotors.png",
      title: "DevMotors",
      type: "Vehicle Management",
      description: "Sample Vehicle Management System for Enthusiasts, Sales People, Car Show Rooms among other car dealership Companies with a fully functional Desktop, Mobile and Web Application. Using Ionic(Angular), NodeJS, Firestore, Cloud Functions",
      text: "Visit",
      link: "https://devmotors-254.web.app/downloads"
    },
    {
      imageurl: "../../../assets/reap.png",
      title: "Reap Web",
      type: "E-commerce",
      description: "(Closed)Trading and Information platform for Farmers. Grocery shop for buyers. Using NodeJS, MongoDB (Admin and Pipelines), AWS Architecture (EC2, Loadbalancer), Cloud Functions, AngularJS",
      text: "Visit",
      link: "https://reaphoster.web.app"
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
