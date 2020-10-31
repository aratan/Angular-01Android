import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Plugins } from '@capacitor/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show:boolean = false;
  n:number = 0;
  arr:string[] = ["Hola","adios","despues","repite"];
  
}
