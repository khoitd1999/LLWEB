import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  kq: any;
  tx: any;
  constructor(private appService: AppService) {}

  getTextTranlate() {
    this.appService.getTextTranlate({tx: this.tx}).subscribe(res => {
      this.kq = res.body;
    });
  }
}
