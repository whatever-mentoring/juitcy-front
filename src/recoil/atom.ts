import { atom } from 'recoil';

export const editCommentState = atom({
  key: 'editCommentTextState',
  default: {
    editClicked: false,
    text: '',
    commentIdx: -1,
  },
});
