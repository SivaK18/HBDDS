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
  



onSubmit(value:string) { 
  var x = new(AppComponent);
  
  
  console.log(value);
  if(value ==="SwethaDharni2024"){
    x.change_val()
  }
  
}

// TODO: Remove this when we're done



}

//////// NOT SHOWN IN DOCS ////////

// Reveal in html:
//   Name via form.controls = {{showFormControls(heroForm)}}




