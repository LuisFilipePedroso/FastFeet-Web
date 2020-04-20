import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      primaryDanger: string;
      secondaryDanger: string;
      primarySuccess: string;
      secondarySuccess: string;
      primaryPending: string;
      secondaryPending: string;
      primaryNeutral: string;
      secondaryNeutral: string;

      primaryBackground: string;
      secondaryBackground: string;
      textPrimary: string;
      textMedium: string;
      textSecondary: string;

      actionButtonLight: string;

      primaryColor: string;
      secondaryColor: string;

      primaryBackgroundTable: string;

      primaryBackgroundArrow: string;
    };
  }
}
