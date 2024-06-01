import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecordingService {
  private _sendingAudio: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _imageReceived: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _imageUrl: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  set sendingAudio(value: boolean) {
    this._sendingAudio.next(value);
  }

  set imageReceived(value: boolean) {
    this._imageReceived.next(value);
  }

  set imageUrl(value: string) {
    this._imageUrl.next(value);
  }

  get sendingAudio$() {
    return this._sendingAudio.asObservable();
  }

  get imageReceived$() {
    return this._imageReceived.asObservable();
  }

  get imageUrl$() {
    return this._imageUrl.asObservable();
  }
}
