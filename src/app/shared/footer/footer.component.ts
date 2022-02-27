import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  date: Date = new Date();

  get themeDark() {
    return this.pS.themeDark;
  }

  constructor( private pS: PortfolioService ) { }

  ngOnInit(): void {
  }

}
