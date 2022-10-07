import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Hulk','Thor','Iroman','Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe() {
    //this.heroes.pop();
    //this.heroes.splice();  
    this.heroeBorrado = this.heroes.shift() || '';
  }
 

}
