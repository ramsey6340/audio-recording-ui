import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'recording', loadChildren: () => import('./modules/audio-recording/audio-recording.module').then(m=>m.AudioRecordingModule)},
  {path: '', redirectTo: 'recording', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
