import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Plugins } from '@capacitor/core';

import { ServicioTask } from './servicio/task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Fresquisimo';
  show:boolean = false;
  n:number = 0;
  arr:string[] = ["Hola","adios","despues","repite"];
  datos =  this._ServicioTask.getDato().subscribe()
  
  constructor(private _ServicioTask: ServicioTask){

  }



  ngOnInit(){
    this._ServicioTask.getDato().subscribe(
      data => console.log(data = data));
      /*data => console.log(data[0].name),
      err => console.log(err),
      () => console.log('Peticion finalizada'))
      */
     document.getElementById("borra").innerHTML = `Aqui: `;
     document.getElementById("borra").className = "mb-5 bg-dark text-white";
     //var obj = data;
    //var myJSON = JSON.stringify(obj);
    //document.getElementById("borrar").innerHTML = myJSON;
  }
  
}

