import { Component } from '@angular/core';
import { style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations:[

    trigger('transX',[
      transition(':enter',[
        style({opacity:0,transform:'translateX(50px)'}),
        animate(1000)
      ])
    ]),
    trigger('trans-X',[
      transition(':enter',[
        style({opacity:0,transform:'translateX(-50px)'}),
        animate(1000)
      ])
    ]),

    trigger('trans-Y',[
      transition('void => *',[
        style({opacity:0,transform:'translateY(-50px)'}),
        animate(1000)
      ])
    ]),
    trigger('transY',[
      transition('void => *',[
        style({opacity:0,transform:'translateY(50px)'}),
        animate(1000)
      ])
    ]),
  ]
})
export class ServicesComponent {
  services1=[
    {name:"Software Engineering",topic:1025,imgSrc:"../../assets/images/1%20(2).jpg"},
    {name:"Quantum Mechanics",topic:1563,imgSrc:"../../assets/images/4%20(1).jpg"},
    {name:"Preventing Dementia",topic:1032,imgSrc:"../../assets/images/3%20(3).jpg"},
    {name:"Hidden Potential",topic:1520,imgSrc:"../../assets/images/6.jpg"},
    {name:"Software Engineering",topic:1651,imgSrc:"../../assets/images/1%20(2).jpg"},
    {name:"Software Engineering",topic:1843,imgSrc:"../../assets/images/4%20(1).jpg"},
    {name:"Quantum Mechanics",topic:1231,imgSrc:"../../assets/images/3%20(3).jpg"},
    {name:"Software Engineering",topic:1258,imgSrc:"../../assets/images/6.jpg"},
  ]

  services2=[
    {name:"Brake Repairs & Services",desc:"Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.",imgSrc:"../../assets/images/s1.jpg"},
    {name:"Brake Repairs & Services",desc:"Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.",imgSrc:"../../assets/images/s2.jpg"},
    {name:"Brake Repairs & Services",desc:"Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.",imgSrc:"../../assets/images/s3.jpg"},
  ]

  services3=[
    {name:"Expert Technicians",desc:"Usage of the Internet is becoming more common due to rapid advancement of technology and power."},
    {name:"Professional Service",desc:"Usage of the Internet is becoming more common due to rapid advancement of technology and power."},
    {name:"Great Support",desc:"Usage of the Internet is becoming more common due to rapid advancement of technology and power."},
    {name:"Technical Skills",desc:"Usage of the Internet is becoming more common due to rapid advancement of technology and power."},
    {name:"Highly Recomended",desc:"Usage of the Internet is becoming more common due to rapid advancement of technology and power."},
    {name:"Positive Reviews",desc:"Usage of the Internet is becoming more common due to rapid advancement of technology and power."},
  ]
}
