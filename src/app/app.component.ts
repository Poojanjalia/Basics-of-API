import { Component } from '@angular/core';
import { TestService } from './test.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



const platform = platformBrowserDynamic();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API2';
  users: any;

  
}
