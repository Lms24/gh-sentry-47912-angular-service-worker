import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gh-sentry-47912-angular-service-worker';

  error() {
    throw new Error('Error from Ngsw repro');
  }
}
