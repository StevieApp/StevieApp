import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stories=[
    {
      title: "Reap",
      image: "../../../assets/reap.png",
      story: `A trading and information platform for farmers where they are able to post their products which will be viewed by the buyers both in large scale and small scale mainly.
              Farmers may also access information as well as products that may help improve their productivity.
              A system where farmers can buy tools as well as other products such as fertilizers, pesticides at affordable prices which help improve their productivity.`,
      link: "https://reapweb.com"
    },
    {
      title: "StevieApp",
      image: "../../../assets/stevieapp3.png",
      story: `As a Full Stack Developer I seek to provide fast and efficient BackEnd for systems to ensure reliable infrastructure for the system. 
              To achieve this I use various technologies including Firebase, MongoDB, AWS, SQL to mention a few. ForFrontEnd my motive is to provide a UI(User Interface), which is basically a view for users, with great UX(User Experience). 
              To achieve this I use AngularJS in collaboration with Bootstrap and Material Design for Web Development and Ionic Framework which also incorporates AngularJS for Android and iOS development.`,
      link: "https://stevieapp254.web.app"
    }
  ]

}
