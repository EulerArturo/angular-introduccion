import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  
})
export class ContadorComponent  {
numero:number= 0;
titulo: string='contador';

acumular(valor:number){
return this.numero += valor
}

}
