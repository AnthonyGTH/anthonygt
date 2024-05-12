import { UtilitiesService } from './../tools/utilities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  workExperienceTime = {
    years: 0,
    months: 0,
    days: 0,
  };
  constructor(private utilitiesS: UtilitiesService) {}

  ngOnInit(): void {
    this.workExperienceTime = this.utilitiesS.getDifferenceBetweenDates(
      2018,
      12,
      1
    );
  }
}
