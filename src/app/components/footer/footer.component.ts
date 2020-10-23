import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
logoW="../../../assets/images/logo copy.svg";
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  }
  goToAbout(){
    this._router.navigate(['/about']);
  }
  goToPortfolio(){
    this._router.navigate(['/portfolio']);
  }
  goToContact(){
    this._router.navigate(['/contact']);
  }

}
