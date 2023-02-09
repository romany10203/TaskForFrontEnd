import { style, transition, trigger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
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
    trigger('transY',[
      transition('void => *',[
        style({opacity:0,transform:'translateY(-30px)'}),
        animate(1000)
      ])
    ]),
  ]
})
export class ContactComponent implements OnInit {
  contactForm!:FormGroup;
  sent=false;
  error=false;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'Name':new FormControl(null,Validators.required),
      'Email':new FormControl(null,[Validators.required,Validators.email]),
      'Phone':new FormControl(null,Validators.required),
      'City':new FormControl(null,Validators.required),
      'Category':new FormControl(null,Validators.required),
      'Message':new FormControl(null,Validators.required)
    })
  }

  sentE(){
    this.sent=true;
    console.log(this.contactForm.controls['Email']);
  }
}
