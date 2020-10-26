import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info-card',
  templateUrl: './contact-info-card.component.html',
  styleUrls: ['./contact-info-card.component.scss']
})
export class ContactInfoCardComponent implements OnInit {
@Input() office: string;
@Input() mail: string;
@Input() address: string;
@Input() phone: string;
  constructor() { }

  ngOnInit(): void {
  }

}
