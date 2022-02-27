import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get themeDark() {
    return this.pS.themeDark;
  }

  constructor( private pS: PortfolioService ) { }

  ngOnInit(): void {
  }

}
