import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
  
}
