import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
welcomeD="../../../assets/images/home/desktop/image-welcome.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
