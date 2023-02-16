import { Component,Input } from '@angular/core';
import { Autos } from 'src/app/Autos';
import { AUTOS } from 'src/app/mock-lista-de-autos';

@Component({
  selector: 'app-autos-item',
  templateUrl: './autos-item.component.html',
  styleUrls: ['./autos-item.component.css']
})
export class AutosItemComponent {
  @Input() autos:Autos=AUTOS[0];
}
