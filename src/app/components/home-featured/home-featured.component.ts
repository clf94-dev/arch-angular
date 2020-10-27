import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-featured',
  templateUrl: './home-featured.component.html',
  styleUrls: ['./home-featured.component.scss']
})
export class HomeFeaturedComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  }

  goToPortfolio() {
    this._router.navigate(['/portfolio']);
  }


  
}
