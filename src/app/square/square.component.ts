import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() x;
  @Input() y;
  @Input() direction;
  @Input() delay;
  @Input() color;

  left = 5;
  right = 40;

  constructor() { }

  ngOnInit() {
    if (this.direction === 'right') {
      this.left += 25;
      this.right += 25;
    }
  }

}
