import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speed-test',
  templateUrl: './speed-test.component.html',
  styleUrls: ['./speed-test.component.css'],
})
export class SpeedTestComponent implements OnInit {
  constructor() {}
  speed = 0;
  ngOnInit(): void {
    this.changeSpeed();
  }
  changeSpeed() {
    this.speed = Math.floor(Math.random() * 150) + 1;
  }
}
