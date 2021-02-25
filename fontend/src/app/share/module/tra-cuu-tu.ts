export interface ITraCuuTu {
  OriginText?: string;
  TranslateText?: string;
  PairCode?: string;
  IsSave?: boolean;
  _id?: any;
}

export class TraCuuTu implements ITraCuuTu {
  constructor (
    OriginText?: string,
    TranslateText?: string,
    PairCode?: string,
    IsSave?: boolean,
    _id?: any
  ) {}
}
