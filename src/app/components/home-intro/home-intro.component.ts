import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IntroInfo } from './introInfo';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.scss'],
})
export class HomeIntroComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _router: Router) {}
  public page: number;
  public introdata: IntroInfo[];
  ngOnInit(): void {
    this.introdata=[
      new IntroInfo("Project Paramour","Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.","../../../assets/images/home/desktop/image-hero-paramour.jpg","../../../assets/images/home/tablet/image-hero-paramour.jpg","../../../assets/images/home/mobile/image-hero-paramour.jpg","Project Paramour"),
      new IntroInfo("Seraph Station","The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.","../../../assets/images/home/desktop/image-hero-seraph.jpg","../../../assets/images/home/tablet/image-hero-seraph.jpg","../../../assets/images/home/mobile/image-hero-seraph.jpg","Seraph Station"),
      new IntroInfo("Federal II Tower","A sequel theme project for a tower originally built in the 1800s. We achieved   this with a striking look of brutal minimalism with modern touches.","../../../assets/images/home/desktop/image-hero-federal.jpg","../../../assets/images/home/tablet/image-hero-federal.jpg","../../../assets/images/home/mobile/image-hero-federal.jpg","Federal II Tower"),
      new IntroInfo("Trinity Bank Tower","Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.","../../../assets/images/home/desktop/image-hero-trinity.jpg","../../../assets/images/home/tablet/image-hero-trinity.jpg","../../../assets/images/home/mobile/image-hero-trinity.jpg","Trinity Bank Tower")
      
    ];
    this.page=0;
  }

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
