import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'hbdds';
  public static show:Boolean = false;
  
  change_val(){
    document.getElementById("hidden").style.display = "none";
    document.getElementById("SweDhar").style.display = "block";
  }
}
