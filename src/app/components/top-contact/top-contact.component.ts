import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-contact',
  templateUrl: './top-contact.component.html',
  styleUrls: ['./top-contact.component.scss']
})
export class TopContactComponent implements OnInit {
topContactD='../../../assets//images/contact/desktop/image-hero.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
