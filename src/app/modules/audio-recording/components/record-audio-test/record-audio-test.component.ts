import { Component } from '@angular/core';
import { ChangeDetectorRef, ElementRef, OnInit, ViewChild } from '@angular/core';
import {AudioRecordingService} from "../../../../core/service/audio-recording.service";

@Component({
  selector: 'app-record-audio-test',
  templateUrl: './record-audio-test.component.html',
  styleUrl: './record-audio-test.component.css'
})
export class RecordAudioTestComponent {
  isRecording = false;
  audioURL: string | null = null;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor(private audioRecordingService: AudioRecordingService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.audioRecordingService.audioBlob$.subscribe(blob => {
      this.audioURL = window.URL.createObjectURL(blob);
      this.audioPlayer.nativeElement.src = this.audioURL;
      this.cd.detectChanges();
    });
  }

  startRecording() {
    this.isRecording = true;
    this.audioRecordingService.startRecording();
  }

  stopRecording() {
    this.isRecording = false;
    this.audioRecordingService.stopRecording();
  }
}
