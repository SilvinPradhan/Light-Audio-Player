import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
    },

    { url: './assets/sound1.mp3', name: 'Test 2 Song' },

    { url: './assets/sound3.mp3', name: 'Test 3 Song' },

    { url: './assets/sound3.mp3', name: 'Test 4 Song' },

    { url: './assets/sound3.mp3', name: 'Test 5 Song' },

    { url: './assets/sound3.mp3', name: 'Test 6 Song' },
  ];

  currentTime = '00:00:00';
  duration = '00:00:00';
  seek = 0;

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

  timeFormat(time, format = 'HH:mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
}
