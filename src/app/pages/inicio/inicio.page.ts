import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar, IonBackButton, IonButton,
  IonButtons, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon,
  IonMenuToggle, IonRow, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonButtons, IonMenuToggle, IonAvatar, IonIcon, IonGrid, IonCol, IonRow, IonButton, RouterLink, IonBackButton, IonText]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
