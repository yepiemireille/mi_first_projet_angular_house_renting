import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css']
})
export class BasicLayoutComponent {
  constructor(private location: Location) { }
  toggled = false;
  title: string

  onToggle(){
    this.toggled = !this.toggled;
  }

  goBack(): void {
    this.location.back();
  }
}
