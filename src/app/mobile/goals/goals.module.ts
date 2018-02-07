import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalComponent } from './goal/goal.component';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';
import { goalsRoutes } from './goals.routing';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(goalsRoutes)
  ],
  declarations: [GoalComponent],
  exports: [RouterModule]
})
export class GoalsModule { }
