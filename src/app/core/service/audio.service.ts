// audio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private apiUrl = 'http://localhost:5000/generate-image';

  constructor(private http: HttpClient) { }

  uploadAudio(file: File): Observable<Blob> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(this.apiUrl, formData, { responseType: 'blob' });
  }
}

/*
// audio-upload.component.ts
import { Component } from '@angular/core';
import { AudioService } from './audio.service';

@Component({
  selector: 'app-audio-upload',
  templateUrl: './audio-upload.component.html',
  styleUrls: ['./audio-upload.component.css']
})
export class AudioUploadComponent {

  constructor(private audioService: AudioService) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.audioService.uploadAudio(file).subscribe((response) => {
        const url = window.URL.createObjectURL(response);
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
      });
    }
  }
}

*/