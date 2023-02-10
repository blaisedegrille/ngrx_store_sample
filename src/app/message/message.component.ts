import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../store/store.service';
import { Message } from '../model/message.model';

const videoSource =
  'https://strapi-dev2.s3.amazonaws.com/cn_reel_jan_2022_v4_mov_Original_c5bd5198ff.mp4';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  messages: Message[] = [];
  constructor(readonly store: StoreService) {
    this.store.messageList$.subscribe((data) => (this.messages = data));
  }

  ngOnInit(): void {}

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
}
