import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logo='../../../assets/images/logo.svg';
  constructor(private _route: ActivatedRoute, private _router: Router){ }

  ngOnInit(): void {
  }
  goToHome(){
    this._router.navigate(['/home']);
  }
}
