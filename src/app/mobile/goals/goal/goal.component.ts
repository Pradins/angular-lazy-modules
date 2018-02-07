import { Component, OnInit } from '@angular/core';
import { GoalAbstract } from '../../../core/main/goal.abstract';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent extends GoalAbstract implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.test();
  }

  public overrideTest(): void {
    console.log('this is mobile overriding');
  }

}
