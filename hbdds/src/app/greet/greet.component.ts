import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {
  show_front : boolean;
  show : number;
  page: BigInteger;
  public pg : number[] = [0,0,0,0,0,0,0,0,0,0,0];
  constructor() {  
    this.show_front = true;
  }

  ngOnInit(): void {
    show_front : true;
    this.show = 0;
    for(let i=0;i<11;i++){
      this.pg[i]=0;
    }
  }
  flip() {
    this.show_front = !this.show_front;
    this.show = 0;
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
    open_card_2_r(page){
      var front = "box" + page;
      var back = front + "_back"
      document.getElementById(front).style.transform = document.getElementById(front).style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
      document.getElementById(back).style.transform = document.getElementById(back).style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
      //this.sort_f(page);
    }
    open_card_2_f(page){
      var front = "box" + page;
      var back = front + "_back"
      document.getElementById(front).style.transform = document.getElementById(front).style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
      document.getElementById(back).style.transform = document.getElementById(back).style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
      this.sort_f(page);
    }
    move_1(){
      if(this.show < 2){
        console.log(this.show_front);
        this.show += 1;
        this.container_move();
      }
      else{
        this.ngOnInit();
      }

    }

    sort_r (page){
      for (let i = 0; i < page; i++) {
        
      }
    }
    sort_f(page){
      let page_i = page-2;
      console.log(this.pg)
      if(this.pg[page_i] < 1){
      let x = 11 - page + 1;
      let values = [];
      for (let i = 0; i < page; i++) {

        values[i]=x;
        x++;
      }
      console.log(this.pg[page]);
      for (let i = page; i > 0; i--){
        let y=0;
        let no_1 = "box"+i;
        let no = no_1+"_back";
        document.getElementById(no).style.zIndex=values[y];
        y++;
      }
      this.pg[page_i]  = this.pg[page_i] + 1;
    }
    else{
      this.ngOnInit();
    }
    }
}
