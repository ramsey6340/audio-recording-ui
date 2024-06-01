import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeningComponent } from './components/listening/listening.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecordingComponent } from './components/recording/recording.component';
import {AudioRecordingRoutingModule} from "./audio-recording-routing.module";
import { RecordAudioTestComponent } from './components/record-audio-test/record-audio-test.component';



@NgModule({
  declarations: [
    ListeningComponent,
    FooterComponent,
    RecordingComponent,
    RecordAudioTestComponent
  ],
  imports: [
    CommonModule,
    AudioRecordingRoutingModule
  ]
})
export class AudioRecordingModule { }
