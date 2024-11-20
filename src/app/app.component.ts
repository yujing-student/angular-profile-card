import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {SocialComponent} from './social/social.component'


@Component({
  selector: 'app-root',
  standalone: true,

  template:`<main>
    <header><img src="linkedin.jpg" alt="image linkedin">  </header>
    <section>
      <app-home>

      </app-home>

    </section>
  </main>`,
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    AboutComponent,
    HomeComponent,
    SocialComponent,

  ],
})
export class AppComponent {
  title = 'homes';
}
