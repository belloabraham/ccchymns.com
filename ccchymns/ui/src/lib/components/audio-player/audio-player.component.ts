import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ccc-audio-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioPlayerComponent implements OnInit, AfterViewInit {
  private observer?: IntersectionObserver;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  @Input({ required: true }) src!: string | URL;
  @Input() muted = false;
  @Input() autoplay = false;
  @Input() controls = true;
  @Input() type = 'mpeg';
  @Input() pauseWhenNotInView = true;
  @Input() intersectionRatio = 0.3;
  audioType = '';
  ngOnInit(): void {
    this.audioType = `audio/${this.type}`;
  }

  ngAfterViewInit(): void {
    if (this.pauseWhenNotInView) {
      this.pauseAudioWhenNotInView();
    }
  }

  private pauseAudioWhenNotInView() {
    const audioPlayer = this.audioPlayer.nativeElement as HTMLAudioElement;
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const audioIsNotInView = !entry.isIntersecting;
          if (audioIsNotInView) {
            audioPlayer.pause();
          }
        });
      },
      { threshold: this.intersectionRatio }
    );
    this.observer.observe(audioPlayer);
  }
}
