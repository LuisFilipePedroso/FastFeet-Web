import { shade } from 'polished';

export default {
  title: 'dark',

  colors: {
    primary: '#FFFFFF',
    secondary: '#7D40E7',
    primaryDanger: '#FAB0B0',
    secondaryDanger: '#DE3B3B',
    primarySuccess: '#DFF0DF',
    secondarySuccess: '#2CA42B',
    primaryPending: '#F0F0DF',
    secondaryPending: '#C1BC35',
    primaryNeutral: '#BAD2FF',
    secondaryNeutral: '#4D85EE',

    primaryBackground: '#333',
    secondaryBackground: '#222',
    textPrimary: '#fff',
    textMedium: '#666666',
    textSecondary: '#fff',

    actionButtonLight: '#C6C6C6',

    primaryColor: shade(0.15, '#444444'),
    secondaryColor: '#CCCCCC',

    primaryBackgroundTable: '#fffffff5',
  },
};
