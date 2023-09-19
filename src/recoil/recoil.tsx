import { atom } from 'recoil';

export const currentUser = atom<string>({
  key: 'currentUser',
  default: 'Juni',
});
