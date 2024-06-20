import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { headerMenu } from '../../constant/header.constant';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatCommonModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  headerMenu = headerMenu;
  ngOnInit() {
    console.log(this.headerMenu);
  }

  routeToFeature(path: string) {
    this.router.navigate([path]);
  }
}
