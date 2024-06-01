import {ChangeDetectorRef, Component, ElementRef, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {AudioRecordingService} from "../../../../core/service/audio-recording.service";
import {RecordingService} from "../../../../core/service/recording.service";
import {Observable, of} from "rxjs";
import { AudioService } from '../../../../core/service/audio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnChanges{
  isRecording = false;
  isListened = false;
  audioURL: string | null = null;
  isSending$!: Observable<boolean>;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor(private audioRecordingService: AudioRecordingService, private audioService: AudioService,
              private cd: ChangeDetectorRef, public recordingService : RecordingService) { }

  ngOnInit() {
    this.audioRecordingService.audioBlob$.subscribe(blob => {
      this.audioURL = window.URL.createObjectURL(blob);
      this.audioPlayer.nativeElement.src = this.audioURL;
      this.cd.detectChanges();
    });
    this.isSending$ = this.recordingService.sendingAudio$;
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  startRecording() {
    this.audioURL=null;
    this.isRecording = true;
    this.recordingService.imageReceived = false;
    this.audioRecordingService.startRecording();
    this.cd.detectChanges();
  }

  stopRecording() {
    this.isRecording = false;
    this.audioRecordingService.stopRecording();
  }

  onClickAudio() {
    const audioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      this.isListened = true;
      console.log(this.isListened);
      audioElement.play();
      this.cd.detectChanges();
    } else {
      this.isListened = false;
      console.log(this.isListened);
      audioElement.pause();
      this.cd.detectChanges();
    }
  }

  async sendAudio() {
    if(this.audioURL != null) {
      let blob = await fetch(this.audioURL).then(r => r.blob());
      var file = new File([blob], "audio_generate");
      this.audioService.uploadAudio(file).subscribe((response) => {
        const url = window.URL.createObjectURL(response);
        console.log(url);
        //const img = document.createElement('img');
        //img.src = url;
        //document.body.appendChild(img);
      });



      this.recordingService.sendingAudio = true;
      //this.isSending$ = this.recordingService.sendingAudio$;
      this.cd.detectChanges();
  
      setTimeout(() => {
        this.recordingService.sendingAudio = false;
        this.recordingService.imageReceived = true;
        this.cd.detectChanges();
      }, 3000);
    }
  }
}
