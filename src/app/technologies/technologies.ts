import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-technologies',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css',
})
export class Technologies {

  technologies = [
    {
      imageurl: "/assets/technologies/angular.svg",
      title: "Angular",
      type: "Web Development",
      description: "Frontend framework for enterprise web apps and dashboards.",
      text: "Learn More",
      link: "https://angular.dev"
    },
    {
      imageurl: "/assets/technologies/ionic.svg",
      title: "Ionic",
      type: "Mobile Development",
      description: "Cross-platform app framework for Android, iOS, and Web.",
      text: "Learn More",
      link: "https://ionicframework.com"
    },
    {
      imageurl: "/assets/technologies/reactnative.svg",
      title: "React Native",
      type: "Mobile Development",
      description: "High-performance native Android & iOS apps using React.",
      text: "Learn More",
      link: "http://reactnative.dev/"
    },
    {
      imageurl: "/assets/technologies/nodejs.svg",
      title: "NodeJS",
      type: "Backend • APIs",
      description: "Backend development using NodeJS, Express, Firebase Functions.",
      text: "Learn More",
      link: "https://nodejs.org"
    },
    {
      imageurl: "/assets/technologies/python.svg",
      title: "Python",
      type: "Automation • CNC",
      description: "Used for automation scripts, CET Hacking, utilities, and backend jobs.",
      text: "Learn More",
      link: "https://python.org"
    },
    {
      imageurl: "/assets/technologies/gcode.svg",
      title: "G-Code",
      type: "CNC Programming",
      description: "Toolpath programming for CNC machines, routing, milling, engraving.",
      text: "Learn More",
      link: "https://en.wikipedia.org/wiki/G-code"
    },
    {
      imageurl: "/assets/technologies/simcnc.svg",
      title: "SimCNC",
      type: "CNC Simulation",
      description: "CNC simulation and controller software for routers and mills.",
      text: "Learn More",
      link: "https://simcnc.com"
    },
    {
      imageurl: "/assets/technologies/mach3.png",
      title: "Mach3",
      type: "CNC Controller",
      description: "Machine control for CNC routing, toolpaths, and spindle control.",
      text: "Learn More",
      link: "https://www.machsupport.com/"
    },
    {
      imageurl: "/assets/technologies/centroid.svg",
      title: "Centroid CNC",
      type: "CNC Control",
      description: "Professional CNC retrofits and control systems for milling and routing.",
      text: "Learn More",
      link: "https://centroidcnc.com"
    },
    {
      imageurl: "/assets/technologies/inventor.png",
      title: "Autodesk Inventor",
      type: "CAD • 3D Modeling",
      description: "Mechanical design, sheet-metal modeling, assembly creation.",
      text: "Learn More",
      link: "https://autodesk.com/products/inventor"
    },
    {
      imageurl: "/assets/technologies/autocad.png",
      title: "AutoCAD",
      type: "Drafting • CAD",
      description: "2D technical drafting for engineering, CNC profiles, architectural plans.",
      text: "Learn More",
      link: "https://autodesk.com/products/autocad"
    },
    {
      imageurl: "/assets/technologies/photoshop.png",
      title: "Adobe Photoshop",
      type: "Design",
      description: "Image editing, banners, posters, UI design, and photo manipulation.",
      text: "Learn More",
      link: "https://adobe.com/photoshop"
    },
    {
      imageurl: "/assets/technologies/illustrator.png",
      title: "Adobe Illustrator",
      type: "Vector Design",
      description: "Logo design, branding, vector art, and icon creation.",
      text: "Learn More",
      link: "https://adobe.com/illustrator"
    },
    {
      imageurl: "/assets/technologies/affinity.png",
      title: "Affinity Designer",
      type: "Graphic Design",
      description: "Vector and raster design for posters, banners, and artwork.",
      text: "Learn More",
      link: "https://affinity.serif.com"
    },
    {
      imageurl: "/assets/technologies/premiere.png",
      title: "Adobe Premiere Pro",
      type: "Video Editing",
      description: "Professional editing for intros, promos, cinematic edits, and reels.",
      text: "Learn More",
      link: "https://adobe.com/premiere"
    },
    {
      imageurl: "/assets/technologies/aftereffects.png",
      title: "After Effects",
      type: "Motion Graphics",
      description: "Logo animations, effects, compositing, and motion design.",
      text: "Learn More",
      link: "https://adobe.com/aftereffects"
    },
    {
      imageurl: "/assets/technologies/davinci.png",
      title: "DaVinci Resolve",
      type: "Video Editing",
      description: "Color grading, editing, VFX, and cinematic post-production.",
      text: "Learn More",
      link: "https://blackmagicdesign.com/products/davinciresolve"
    },
    {
      imageurl: "/assets/technologies/git.png",
      title: "Git",
      type: "Version Control",
      description: "Code versioning, collaboration, and workflow management.",
      text: "Learn More",
      link: "https://git-scm.com"
    },
    {
      imageurl: "/assets/technologies/github.svg",
      title: "GitHub",
      type: "Version Control • Collaboration",
      description: "Repositories, issues, CI/CD, and team code collaboration.",
      text: "Learn More",
      link: "https://github.com"
    },
    {
      imageurl: "/assets/technologies/bitbucket.svg",
      title: "Bitbucket",
      type: "Version Control • DevOps",
      description: "Git hosting with pipelines for automation and deployment.",
      text: "Learn More",
      link: "https://bitbucket.org"
    },
    {
      imageurl: "/assets/technologies/firebase.png",
      title: "Firebase",
      type: "Backend • Cloud",
      description: "Hosting, Firestore, Auth, Cloud Functions, and app deployment.",
      text: "Learn More",
      link: "https://firebase.google.com"
    },
    {
      imageurl: "/assets/technologies/supabase.svg",
      title: "Supabase",
      type: "Backend • Database",
      description: "Open-source Firebase alternative providing Postgres, Auth, Storage, and Edge Functions.",
      text: "Learn More",
      link: "https://supabase.com"
    },
    {
      imageurl: "/assets/technologies/aws.svg",
      title: "AWS",
      type: "Cloud",
      description: "EC2, S3, Load Balancing, Cloud Infrastructure, Deployment pipelines.",
      text: "Learn More",
      link: "https://aws.amazon.com"
    },
    {
      imageurl: "/assets/technologies/gcp.svg",
      title: "Google Cloud Platform",
      type: "Cloud",
      description: "Compute Engine, Cloud Run, Firestore, cloud hosting and deployment.",
      text: "Learn More",
      link: "https://cloud.google.com"
    },
  ]


}
