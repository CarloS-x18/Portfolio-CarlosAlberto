import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../interfaces/porfolio.interfaces';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent implements OnInit {

  @Input('project') project! : Project;

  get themeDark() {
    return this.pS.themeDark;
  }

  constructor( private pS: PortfolioService ) { }

  ngOnInit(): void {
  }

}
