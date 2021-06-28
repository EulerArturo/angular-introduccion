import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  
})
export class HeroeComponent  {
titulo:string= 'nombre de heroe';
edad: number= 45;
nombre: string= 'airoman'

combinar(){
  return`${this.nombre}- ${this.edad}`
}

get tranformar(){
  return this.nombre.toUpperCase()
}

cambiarNombre(){
  return this.nombre= 'arturo';
}

}
