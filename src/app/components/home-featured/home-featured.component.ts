import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeFeaturedData } from './homeFeaturedData';

@Component({
  selector: 'app-home-featured',
  templateUrl: './home-featured.component.html',
  styleUrls: ['./home-featured.component.scss']
})
export class HomeFeaturedComponent implements OnInit {
public homefeatured: HomeFeaturedData[];
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.homefeatured=[
      new HomeFeaturedData("Project Del Sol","","../../../assets/images/portfolio/desktop/image-del-sol.jpg","Project Del Sol"),
      new HomeFeaturedData("228B Tower","","../../../assets/images/portfolio/desktop/image-228b.jpg","228B Tower"),
      new HomeFeaturedData("Le Prototype","","../../../assets/images/portfolio/desktop/image-prototype.jpg","Le Prototype")
    ]
  }

  goToPortfolio() {
    this._router.navigate(['/portfolio']);
  }


  
}
