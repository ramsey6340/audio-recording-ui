import {ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable} from "rxjs";
import {RecordingService} from "../../../../core/service/recording.service";

@Component({
  selector: 'app-listening',
  templateUrl: './listening.component.html',
  styleUrl: './listening.component.css'
})
export class ListeningComponent implements OnInit, OnChanges{
  isImage: boolean=false;
  isImageReceived!: Observable<boolean>;
  imageUrl: string | null = null;

  constructor(private recordingService : RecordingService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.recordingService.imageReceived$.subscribe({
      next: value => {
        this.isImage = value;
        if(value) {
          this.recordingService.imageUrl$.subscribe({
            next: url => {
              this.imageUrl = url;
            }
          })
        }
        this.cd.detectChanges();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {

  }
}
