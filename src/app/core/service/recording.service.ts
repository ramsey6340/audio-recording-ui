import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecordingService {
  private _sendingAudio: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _imageReceived: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  set sendingAudio(value: boolean) {
    this._sendingAudio.next(value);
  }

  set imageReceived(value: boolean) {
    this._imageReceived.next(value);
  }

  get sendingAudio$() {
    return this._sendingAudio.asObservable();
  }

  get imageReceived$() {
    return this._imageReceived.asObservable();
  }
}
