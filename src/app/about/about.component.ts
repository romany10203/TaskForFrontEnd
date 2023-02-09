import { style, transition, trigger, animate } from '@angular/animations';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations:[

    trigger('trans',[
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
        style({opacity:0,transform:'translateY(50px)'}),
        animate(1000)
      ])
    ]),
  ]
})
export class AboutComponent implements OnInit {
  teamMembers=[
    {name:"Mahmoud",role:"Designer",desc:"Great explorer of the truth, the master-builder of human happiness.",imgSrc:"../../assets/images/8 (1).jpg"},
    {name:"Ahmed",role:"Front-end developer",desc:"Great explorer of the truth, the master-builder of human happiness.",imgSrc:"../../assets/images/2 (1).jpg"},
    {name:"Mariam",role:"Back-end developer",desc:"Great explorer of the truth, the master-builder of human happiness.",imgSrc:"../../assets/images/3 (1).jpg"},
    {name:"Mohamed",role:"Back-end developer",desc:"Great explorer of the truth, the master-builder of human happiness.",imgSrc:"../../assets/images/2 (3).jpg"},
    {name:"Menna",role:"Mobile developer",desc:"Great explorer of the truth, the master-builder of human happiness.",imgSrc:"../../assets/images/3 (5).jpg"},
    {name:"Nader",role:"Moblle developer",desc:"Great explorer of the truth, the master-builder of human happiness.",imgSrc:"../../assets/images/7 (1).jpg"},
    {name:"Shahd",role:"Manager",desc:"Great explorer of the truth, the master-builder of human happiness.",imgSrc:"../../assets/images/5 (1).jpg"},
  ]

  ngOnInit(): void {
      
  }
}
