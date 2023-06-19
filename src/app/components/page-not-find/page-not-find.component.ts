import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-find',
  templateUrl: './page-not-find.component.html',
  styleUrls: ['./page-not-find.component.css']
})
export class PageNotFindComponent {
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }

}
