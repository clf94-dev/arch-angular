import { Component, OnInit } from '@angular/core';
import { ContactInfo } from './contactInfo';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
public contactinfo: ContactInfo[];
  constructor() {
this.contactinfo=[
  new ContactInfo ("Main Office","Mail :			archone@mail.com","Address :		1892  Chenoweth Drive TN","Phone :		123-456-3451"),
  new ContactInfo ("Office II","Mail :			archtwo@mail.com","Address :		3399  Wines Lane TX","Phone :		832-123-4321")
]
   }

  ngOnInit(): void {
  }

}
