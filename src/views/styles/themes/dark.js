import languageColors from '../languageColors.json';

languageColors['React'] = '#61DAFB';

const breakpoints = ['576px', '768px', '992px', '1200px'];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default {
  name: 'dark',
  typography: {
    fontFamily: '"Kalpurush", "PT Serif", sans-serif',
    fontSize: '20px',
    lineHeight: 1.65,
    fontWeight: '400',
    h1: {
      fontSize: '2.488rem',
      lineHeight: 1.65,
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.074rem',
      lineHeight: 1.65,
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.728rem',
      lineHeight: 1.65,
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.44rem',
      lineHeight: 1.65,
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.2rem',
      lineHeight: 1.65,
      fontWeight: 700,
    },
    h6: {
      fontSize: '1rem',
      lineHeight: 1.65,
      fontWeight: 700,
    },
    body: {
      fontSize: '1rem',
      lineHeight: 1.65,
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.833rem',
      lineHeight: 1.65,
      fontWeight: 400,
    },
  },
  colors: {
    primary3: '#7950F2',
    primary2: '#845EF7',
    primary1: '#9775FA',
    dark2: '#212529',
    dark1: '#495057',
    light2: '#F1F3F5',
    light1: '#f8f9fa',
    error: '#FA5252',
    success: '#51CF66',
    warning: '#FFD43B',
    text: '#adb5bd',
    background: '#212529',
    ...languageColors,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  breakpoints,
};
