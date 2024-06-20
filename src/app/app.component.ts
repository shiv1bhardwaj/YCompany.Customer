import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyComComponent } from './my-com/my-com.component';
import { LoaderComponent } from './views/loader/loader.component';
import { HeaderComponent } from './views/header/header.component';
import { SideNavComponent } from './views/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MyComComponent,
    LoaderComponent,
    HeaderComponent,
    SideNavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Assignment-UI';
}
