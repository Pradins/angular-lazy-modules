import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalComponent } from './goal/goal.component';
import { RouterModule } from '@angular/router';
import { goalRouting } from './desktop.routing';
import { CoreModule } from '../core/core.module';

console.log('desktop module');
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(goalRouting),
    CoreModule
  ],
  declarations: [GoalComponent]
})
export class DesktopModule { }
