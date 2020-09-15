import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  show_front : boolean;
  constructor() { }

  ngOnInit(): void {
    this.show_front = false;
  }
  flip() {
    this.show_front = !this.show_front;
    console.log(this.show_front);
   
}
}
