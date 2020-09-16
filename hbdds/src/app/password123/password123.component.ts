import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import {AppComponent} from '../app.component'

@Component({ 
  selector: 'app-password123',
  templateUrl: './password123.component.html',
  styleUrls: ['./password123.component.scss']
})
export class Password123Component implements OnInit {

  psswd = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }
  



onSubmit() { 
  var x = new(AppComponent);
  
  var i = document.getElementById("alterEgo").textContent;
  console.log(i);
  x.show = true;
  
}

// TODO: Remove this when we're done



}

//////// NOT SHOWN IN DOCS ////////

// Reveal in html:
//   Name via form.controls = {{showFormControls(heroForm)}}




