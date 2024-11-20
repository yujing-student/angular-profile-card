import { Component } from '@angular/core';
import {AboutComponent} from "../about/about.component";
import {SocialComponent} from '../social/social.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    SocialComponent,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
