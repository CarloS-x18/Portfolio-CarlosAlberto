import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/porfolio.interfaces';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../interfaces/porfolio.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  get themeDark() {
    return this.portfolioService.themeDark;
  }

  get projects(): Project[] {
    return this.portfolioService.projects;
  }

  get skills(): Skill[] {
    return this.portfolioService.skills;
  }

  constructor( private portfolioService: PortfolioService ) { }

}
