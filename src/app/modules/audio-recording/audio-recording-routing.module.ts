import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RecordingComponent} from "./components/recording/recording.component";
import {RecordAudioTestComponent} from "./components/record-audio-test/record-audio-test.component";

const routes: Routes = [
  //{path: '', component: RecordAudioTestComponent}
  {path: '', component: RecordingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioRecordingRoutingModule { }
