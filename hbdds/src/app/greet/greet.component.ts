import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {
  show_front : boolean;
  constructor() {  }

  ngOnInit(): void {
    show_front : true;
  }
  flip() {
    this.show_front = !this.show_front;
  }
  
   container_move(){
    document.getElementById("shell").style.transform = document.getElementById("shell").style.transform == "translateX(0%)" ? "translateX(-50%)" : "translateX(0%)";
    setTimeout("helo",500);
    }
  
   open_card(){
    console.log("called");
    document.getElementById("container").style.transform = document.getElementById("container").style.transform == "rotateX(0deg)" ? "rotateX(70deg)" : "rotateX(0deg)";
    document.getElementById("box1").style.transform = document.getElementById("box1").style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
    document.getElementById("box1_back").style.transform = document.getElementById("box1_back").style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
    console.log("here");
    }
}
