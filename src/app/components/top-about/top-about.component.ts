import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-about',
  templateUrl: './top-about.component.html',
  styleUrls: ['./top-about.component.scss']
})
export class TopAboutComponent implements OnInit {
topAboutD='../../../assets/images/about/desktop/image-hero.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
