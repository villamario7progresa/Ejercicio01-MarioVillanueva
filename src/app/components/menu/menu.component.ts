import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader, IonItem,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    RouterLink,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem
  ]
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
