// import required packages
import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// describe component
@Component({
  selector: 'login', // component name used in markup
  standalone: true, // component is self-contained
  // the component's markup
  template: `
   <button (click)="count = count + 1">Add one vvvv</button> {{ count }}
  `,
})

// export component
export class LoginComponent {
  count = 0;
}

bootstrapApplication(LoginComponent);
