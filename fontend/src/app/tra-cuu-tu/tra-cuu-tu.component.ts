import { Component, OnInit } from '@angular/core';
import { TraCuuTuService } from './tra-cuu-tu.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tra-cuu-tu',
  templateUrl: './tra-cuu-tu.component.html',
  styleUrls: ['./tra-cuu-tu.component.css']
})
export class TraCuuTuComponent implements OnInit {
  textSearch: any;
  textResult: any;
  fromCode: any;
  toCode: any;
  constructor(private traCuuService: TraCuuTuService, private toastr: ToastrService) { }

  ngOnInit() {
    this.fromCode = 'en';
    this.toCode = 'vi';
    this.clearText();
  }

  searchText(e) {
    e.preventDefault();
    this.traCuuService.getTextTranlate({tx: this.textSearch, fromCode: this.fromCode, toCode: this.toCode}).subscribe(res => {
      this.textResult = res.body;
    });
  }

  changeCodeText() {
    const tmp = this.fromCode;
    this.fromCode = this.toCode;
    this.toCode = tmp;
  }

  clearText() {
    this.textSearch = '';
    this.textResult = '';
  }

  saveText() {
    if (this.textResult.length === 0) {
      this.toastr.error('Từ này chưa được tra cứu', 'Error');
    }
  }

  changeTextSearch() {
    this.textResult = '';
  }
}
