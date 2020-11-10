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
 
  nombre = "logo";

  cambiaNombre(){
  this.nombre += "carlos"
}

}
