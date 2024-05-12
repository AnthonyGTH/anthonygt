import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../tools/utilities.service';

@Component({
  selector: 'app-work-experience-detailed',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {
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
