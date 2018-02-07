import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalkComponent } from './talk/talk.component';
import { RouterModule, Routes } from '@angular/router';

const talksRoutes: Routes = [
  {
    path: 'talk',
    component: TalkComponent
  }
];

console.log('talks module');
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(talksRoutes)
  ],
  declarations: [TalkComponent],
  exports: [RouterModule]
})
export class TalksModule { }
