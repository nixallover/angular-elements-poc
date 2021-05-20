import { Component } from '@angular/core';

@Component({
  selector: 'poc-root',
  template: ` <h1>{{ title }}</h1> `,

  styles: [
    `
      h1 {
        color: green;
      }
    `,
  ],
})
export class AppComponent {
  title = 'POC Custom Element';
}
