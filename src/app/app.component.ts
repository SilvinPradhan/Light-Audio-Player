import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private db: AngularFirestore,
    private store: AngularFireStorage
  ) {}

  selectedFile: any;
  chooseFile(event) {
    this.selectedFile = event.target.files;
  }

  async uploadFile(id, file): Promise<any> {
    if (file && file.length) {
      try {
        const task = await this.store.ref('/audios').child(id).put(file[0]);
        return this.store.ref(`audios/${id}`).getDownloadURL().toPromise();
      } catch (error) {
        console.log(error);
      }
    }
  }

  ngOnInit() {}

  audioObj = new Audio();
  audioEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart',
  ];
  files = [
    {
      url:
        'http://conferencenow.info/audio/TiengNoiQueHuong/200917-Pho%cc%89ngV%c3%a2%cc%81nMSKi%c3%aa%cc%81n.mp3',
      name: 'sample',
      id: 'current1',
    },

    { url: './assets/sound1.mp3', name: 'Test 2 Song' },
    {
      url:
        'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Alesis%20FX/26[kb]alesis-d4fx-00.wav.mp3',
      name: 'Test 2 Song',
      id: 'current2',
    },

    { url: './assets/sound3.mp3', name: 'Test 3 Song', id: 'current3' },

    { url: './assets/sound3.mp3', name: 'Test 4 Song', id: 'current4' },

    { url: './assets/sound3.mp3', name: 'Test 5 Song', id: 'current5' },

    { url: './assets/sound3.mp3', name: 'Test 6 Song', id: 'current6' },
    {
      url:
        'http://conferencenow.info/audio/httg/201030-B%c3%81N%20HAY%20GI%e1%bb%ae-MS%20Tr%c3%a2%cc%80nNguy%c3%aanBa%cc%89o.mp3',
      name: 'Test 7 song',
      id: 'current7',
    },
  ];

  currentTime = '00:00:00';
  duration = '00:00:00';
  seek = 0;
  repeat = false;

  streamObserver(url) {
    return new Observable((observer) => {
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: Event) => {
        console.log(event);
        this.seek = this.audioObj.currentTime;
        this.duration = this.timeFormat(this.audioObj.duration);
        this.currentTime = this.timeFormat(this.audioObj.currentTime);
      };

      this.addEvent(this.audioObj, this.audioEvents, handler);

      return () => {
        this.audioObj.pause();
        this.audioObj.currentTime = 0;

        this.removeEvent(this.audioObj, this.audioEvents, handler);
      };
    });
  }

  addEvent(obj, events, handler) {
    events.forEach((event) => {
      obj.addEventListener(event, handler);
    });
  }

  removeEvent(obj, events, handler) {
    events.forEach((event) => {
      obj.removeEventListener(event, handler);
    });
  }

  setSeekTo(ev) {
    this.audioObj.currentTime = ev.target.value;
  }

  setVolume(ev) {
    this.audioObj.volume = ev.target.value;
  }

  openFile(url) {
    this.streamObserver(url).subscribe((event) => {});

    console.log(url);
  }

  play() {
    this.audioObj.play();
  }
  pause() {
    this.audioObj.pause();
    console.log('Clicked Pause Button');
  }
  stop() {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
    console.log('Clicked Stop button');
  }

  repeatAudio() {
    while (this.audioObj.currentTime) {
      if ((this.currentTime = this.timeFormat(this.audioObj.currentTime))) {
        this.repeat = !this.repeat;
        this.audioObj.currentTime = 0;
        this.audioObj.play();
      }
    }
  }

  timeFormat(time, format = 'HH:mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
}
