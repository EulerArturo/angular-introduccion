import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  
})
export class ListaComponent  {
titulo:string='Lista de Superheroes'
heroes:string[]=['spiderman', 'superman', 'thor', 'huld']
heroeBorrado:string= '';

borrarheroe(){
  this.heroeBorrado = this.heroes.shift()|| '';
}
}
