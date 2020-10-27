import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.scss'],
})
export class HomeIntroComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _router: Router) {}
  public page: number;
  ngOnInit(): void {}

  goToPortfolio() {
    this._router.navigate(['/portfolio']);
  }
  goToPage1() {
    this.page = 0;
  }
  goToPage2() {
    this.page = 1;
  }
  goToPage3() {
    this.page = 2;
  }
  goToPage4() {
    this.page = 3;
  }
}
