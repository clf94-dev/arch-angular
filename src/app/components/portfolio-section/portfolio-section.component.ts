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
  constructor(private _route: ActivatedRoute, private _router: Router) { 
    this.portfoliodata=[
      new HomeFeaturedData("Seraph Station","September 2019","../../../assets/images/home/desktop/image-hero-seraph.jpg","Seraph Station"),
      new HomeFeaturedData("Eebox Building","August 2017","../../../assets/images/portfolio/desktop/image-eebox.jpg","Eebox Building"),
      new HomeFeaturedData("Federal II Tower","March 2017","../../../assets/images/home/desktop/image-hero-federal.jpg","Federal II Tower"),
      new HomeFeaturedData("Project Del Sol","January 2016","../../../assets/images/portfolio/desktop/image-del-sol.jpg","Project Del Sol"),
           new HomeFeaturedData("Le Prototype","October 2015","../../../assets/images/portfolio/desktop/image-prototype.jpg","Le Prototype"),
            new HomeFeaturedData("228B Tower","April 2015","../../../assets/images/portfolio/desktop/image-228b.jpg","228B Tower"),

      new HomeFeaturedData("Grand Edelweiss Hotel","December 2013","../../../assets/images/portfolio/desktop/image-edelweiss.jpg","Grand Edelweiss Hotel"),
      new HomeFeaturedData("Netcry Tower"," August 2012","../../../assets/images/portfolio/desktop/image-netcry.jpg","Netcry Tower"),
      new HomeFeaturedData("Hypers","January 2012","../../../assets/images/portfolio/desktop/image-hypers.jpg","Hypers"),
      new HomeFeaturedData("SXIV Tower","March 2011","../../../assets/images/portfolio/desktop/image-sxiv.jpg","SXIV Tower"),
      new HomeFeaturedData("Trinity Bank Tower","September 2010","../../../assets/images/home/desktop/image-hero-trinity.jpg","Trinity Bank Tower"),
      new HomeFeaturedData("Project Paramour","February 2008","../../../assets/images/home/desktop/image-hero-paramour.jpg","Project Paramour")
    
    ]
  }

  ngOnInit(): void {
  }

  goToPortfolio() {
    this._router.navigate(['/portfolio']);
  }
}
