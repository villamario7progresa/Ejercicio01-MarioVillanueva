import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonMenuToggle,
  IonRow, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonCol, IonGrid, IonButtons, IonRow, IonButton, RouterLink, IonMenuToggle, IonText]
})
export class ExtraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
