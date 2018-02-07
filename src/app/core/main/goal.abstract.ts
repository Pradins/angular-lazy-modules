import {OnInit} from '@angular/core';

export abstract class GoalAbstract implements OnInit{

  constructor() {}

  ngOnInit() {
    console.log('called')
  }

  protected test(): void {
    console.log('abstract test is able');
  }

  protected overrideTest(): void {
    console.log('call from super');
  }
}
