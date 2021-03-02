import { Component, OnInit } from '@angular/core';
import { TraCuuTuService } from './tra-cuu-tu.service';
import { ToastrService } from 'ngx-toastr';
import { ITraCuuTu, TraCuuTu } from '../share/module/tra-cuu-tu';
import { ReviewService } from '../review/review.service';

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
  isLoading: boolean;
  constructor(
    private traCuuService: TraCuuTuService,
    private toastr: ToastrService,
    private reviewService: ReviewService
  ) { }

  ngOnInit() {
    this.fromCode = 'vi';
    this.toCode = 'en';
    this.isLoading = false;
    this.objReponse = new TraCuuTu();
    this.clearText();
  }

  searchText(e) {
    e.preventDefault();
    if (this.textSearch.length > 0 && !this.isLoading) {
      const tmp = this.standardWord();
      this.isLoading = true;
      this.traCuuService.getTextTranlate({tx: tmp, fromCode: this.fromCode, toCode: this.toCode}).subscribe(res => {
        this.isLoading = false;
        this.objReponse = res.body;
        this.textResult = this.objReponse.TranslateText;
      },
      () => {
        this.toastr.error('Từ này không tìm thấy', 'Error');
      });
    }
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
      } else if (!this.isLoading) {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const obj = {user: user.username, word: this.objReponse._id};
        this.isLoading = true;
        this.reviewService.saveWordToReview(obj).subscribe(res => {
          this.isLoading = false;
          if (res.body.status) {
            this.toastr.success('Lưu từ thành công', 'Success');
          } else {
            if (res.body.message) {
              this.toastr.error(res.body.message, 'Error');
            }
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

  standardWord() {
    const arr = this.textSearch.split(' ');
    let tmp = '';
    arr.forEach(element => {
      if (element !== '') {
        tmp += element + ' ';
      }
    });
    return tmp.trim();
  }
}
