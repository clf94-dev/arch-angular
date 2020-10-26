import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
public user:any;
  constructor() {
    this.user={
      name: "",
      email: "",
      message: ""
    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    
    console.log(this.user)
  }
}
