import { Component, OnInit } from '@angular/core';
import { TraCuuTuService } from './tra-cuu-tu.service';
import { ToastrService } from 'ngx-toastr';
import { ITraCuuTu, TraCuuTu } from '../share/module/tra-cuu-tu';
import { User } from '../share/module/user';

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
  objReponse: ITraCuuTu;
  constructor(private traCuuService: TraCuuTuService, private toastr: ToastrService) { }

  ngOnInit() {
    this.fromCode = 'en';
    this.toCode = 'vi';
    this.objReponse = new TraCuuTu();
    this.clearText();
  }

  searchText(e) {
    e.preventDefault();
    this.traCuuService.getTextTranlate({tx: this.textSearch, fromCode: this.fromCode, toCode: this.toCode}).subscribe(res => {
      this.objReponse = res.body;
      this.textResult = this.objReponse.TranslateText;
    },
    () => {
      this.toastr.error('Từ này không tìm thấy', 'Error');
    });
  }

  changeCodeText() {
    const tmp = this.fromCode;
    this.fromCode = this.toCode;
    this.toCode = tmp;
    if (this.textResult.length > 0 && this.textSearch.length > 0) {
      const tmp1 = this.textResult;
      this.textResult = this.textSearch;
      this.textSearch = tmp1;
    } else if (this.textSearch.length > 0) {
      this.textSearch = '';
    }
  }

  clearText() {
    this.textSearch = '';
    this.textResult = '';
  }

  saveText() {
    if (sessionStorage.getItem('user')) {
      if (this.textResult.length === 0) {
        this.toastr.error('Từ này chưa được tra cứu', 'Error');
      } else {
        this.traCuuService.saveTextTranslate(this.objReponse._id).subscribe(res => {
          if (res) {
            this.toastr.success('Lưu từ thành công', 'Success');
          } else {
            this.toastr.error('Lưu từ thất bại', 'Error');
          }
        });
      }
    } else {
      this.toastr.error('Vui lòng đăng nhập để lưu từ!', 'Error');
    }
  }

  changeTextSearch() {
    this.textResult = '';
  }
}
