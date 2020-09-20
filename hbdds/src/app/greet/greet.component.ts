import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {
  show_front : boolean;
  page: BigInteger;
  constructor() {  }

  ngOnInit(): void {
    show_front : true;
  }
  flip() {
    this.show_front = !this.show_front;
  }
  
   container_move(){
    document.getElementById("shell").style.transform = document.getElementById("shell").style.transform == "translateX(0%)" ? "translateX(-50%)" : "translateX(0%)";
    setTimeout(this.open_card,500);
    }
  
   open_card(){
    console.log("called");
    document.getElementById("container").style.transform = document.getElementById("container").style.transform == "rotateX(0deg)" ? "rotateX(70deg)" : "rotateX(0deg)";
    document.getElementById("box1").style.transform = document.getElementById("box1").style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
    document.getElementById("box1_back").style.transform = document.getElementById("box1_back").style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
    console.log("here");
    }
    open_card_2(page){
      var front = "box" + page;
      var back = front + "_back"
      console.log(front);
      document.getElementById(front).style.transform = document.getElementById(front).style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
      document.getElementById(back).style.transform = document.getElementById(back).style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
      this.sort_r(page);
    }

    sort_r (page){
      for (let i = 0; i < page; i++) {
        console.log ("page" + i);
      }
    }
    sort_f(page){
      for (let i = 0; i < page; i++) {
        console.log ("page" + i);
      }
    }
}
