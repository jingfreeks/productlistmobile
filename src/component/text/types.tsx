import {ReactNode} from 'react';

export type textmode =
  | 'Text'
  | 'Title'
  | 'Stext'
  | 'TextNormal'
  | 'Htitle'
  | 'Stitle'
  | 'Htitlenormal'
  | 'Ptitle'
  | 'Pstitle'
  | 'TextNormalBold'
  | 'TextNormalRegular'
  | 'MtextBold'
  | 'ErrorText'
  | 'TextH1Title';

export type TextTypes = {
  TextMode?: textmode;
  nativeProps?: object;
  children?: ReactNode;
};
