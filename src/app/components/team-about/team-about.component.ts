import { Component, OnInit } from '@angular/core';
import { TeamData } from './teamData';

@Component({
  selector: 'app-team-about',
  templateUrl: './team-about.component.html',
  styleUrls: ['./team-about.component.scss']
})
export class TeamAboutComponent implements OnInit {
public membersdata: TeamData[];
  constructor() {
    this.membersdata=[
      new TeamData("Jake Richards","Chief Architect","../../../assets/images/about/desktop/avatar-jake.jpg","Jake Richards"),
      new TeamData("Thompson Smith","Head of Finance","../../../assets/images/about/desktop/avatar-thompson.jpg","Thompson Smith"),
      new TeamData("Jackson Rourke","Lead Designer","../../../assets/images/about/desktop/avatar-jackson.jpg","Jackson Rourke"),
      new TeamData("Maria Simpson","Senior Architect","../../../assets/images/about/desktop/avatar-maria.jpg","Maria Simpson")
    ]
   }

  ngOnInit(): void {
  }

}
