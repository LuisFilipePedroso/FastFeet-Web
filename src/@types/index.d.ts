import Reactotron from 'reactotron-react-js';

type ReactotronType = typeof Reactotron;

declare global {
  interface Console {
    tron: ReactotronType;
  }
}
