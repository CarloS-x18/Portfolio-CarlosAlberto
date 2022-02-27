import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  toggle: boolean = false;

  get themeDark() {
    return this.portfolioService.themeDark;
  }

  constructor( private renderer: Renderer2,
               private portfolioService: PortfolioService ) {}

  btnToggle() {
    this.toggle = !this.toggle;
  }

  toggleClickPage() {
    this.toggle = false;
  }

  changeTheme() {
    this.portfolioService.themeDark = !this.portfolioService.themeDark;
  }

}
