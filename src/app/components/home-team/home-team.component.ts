import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-team',
  templateUrl: './home-team.component.html',
  styleUrls: ['./home-team.component.scss']
})
export class HomeTeamComponent implements OnInit {
teamD="../../../assets/images/home/desktop/image-small-team.jpg"
teamT="../../../assets/images/home/tablet/image-small-team.jpg"
teamM="../../../assets/images/home/mobile/image-small-team.jpg"
arrow="../../../assets/images/icons/icon-arrow.svg"
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  }
  goToAbout(){
    this._router.navigate(['/about']);
  }
}
