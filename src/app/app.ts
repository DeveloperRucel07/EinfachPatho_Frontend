import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from "@angular/material/icon";
import { ThemeService } from './services/theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIcon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
    protected readonly title = signal('EinfachPathoFrontend');
    theme = inject(ThemeService);
}
