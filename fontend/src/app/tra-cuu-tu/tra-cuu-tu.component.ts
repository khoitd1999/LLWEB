import { Component, OnInit } from '@angular/core';
import { TraCuuTuService } from './tra-cuu-tu.service';

@Component({
  selector: 'app-tra-cuu-tu',
  templateUrl: './tra-cuu-tu.component.html',
  styleUrls: ['./tra-cuu-tu.component.css']
})
export class TraCuuTuComponent implements OnInit {
  textSearch: any;
  textResult: any;
  constructor(private traCuuService: TraCuuTuService) { }

  ngOnInit() {
  }

  searchText(e) {
    e.preventDefault();
    this.traCuuService.getTextTranlate({tx: this.textSearch}).subscribe(req => {
      this.textResult = req.body.text;
    });
  }
}
