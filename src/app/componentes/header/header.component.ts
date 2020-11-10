import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { 
    console.log("creando")
  }

  ngOnInit(): void {
    console.log("creado")
  }
 
  nombre = "";

  cambiaNombre(){
  this.nombre += "carlos: " +  Math.floor(Math.random()*(10-1+1)+1);
}

}
