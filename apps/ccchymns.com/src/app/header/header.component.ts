import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NgMaterialButtonModule,
  NgMaterialElevationDirective,
  SharedModule,
} from '@ccchymns.com/angular';
import { Route } from '../../core/data/route';
import { NgOptimizedImage } from '@angular/common';
import { RootLanguageResourceKey } from '../../core/i18n/language-resource-key';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SharedModule,
    RouterLink,
    NgMaterialButtonModule,
    NgMaterialElevationDirective,
    NgOptimizedImage,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  route = Route;
  root = Route.ROOT;
  languageResourceKey = RootLanguageResourceKey;
  download() {
    console.log();
  }
}
