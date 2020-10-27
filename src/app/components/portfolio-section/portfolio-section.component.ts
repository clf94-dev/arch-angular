import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeFeaturedData } from '../home-featured/homeFeaturedData';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent implements OnInit {
public portfoliodata: HomeFeaturedData[];
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  }

  goToPortfolio() {
    this._router.navigate(['/portfolio']);
  }
}
