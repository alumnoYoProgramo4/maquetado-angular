import { Component } from '@angular/core';
import { Autos } from 'src/app/Autos';
import { AUTOS } from 'src/app/mock-lista-de-autos';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent {
  titulo="Gestion de Vehiculos";
  autos: Autos[] = AUTOS;

}
