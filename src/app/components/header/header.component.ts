import {Component, model, ModelSignal, OnInit} from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon
  ]
})
export class HeaderComponent  implements OnInit {

  titulo: ModelSignal<String> = model.required();

  constructor() { }

  ngOnInit() {}

}
