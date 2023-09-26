import { rgba } from 'polished';

const userType = window.localStorage.getItem('userType');

const orange = '#FF8267';
const blue = '#3F6EFF';
const main: string = userType === 'Juni' ? orange : blue;

export const Palette = {
  Grey: '#e7e7e7',
  Main: main,
  Orange: orange,
  Blue: blue,
  Sub: { yellow: '#FDF7E8', blue: '#F7F6FA' },
  Back: { juni: '#FDFBFB' },

  White: '#FFFFFF',
  Gray05: '#FBFBFD',
  Gray1: '#F2F2F2',
  Gray2: '#E0E0E0',
  Gray3: '#BDBDBD',
  Gray4: '#9E9E9E',
  Gray5: '#616161',
  Gray6: '#212121',
  Black: '#000000',

  Main80: rgba(main, 0.8),
  Main50: rgba(main, 0.5),
  Main15: rgba(main, 0.15),
  Main05: rgba(main, 0.05),
};
