import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        white: string,
        background: string,
        '--blue-900': string,
        '--blue-600': string,
        '--blue-300': string,
        '--blue-cta': string
    }
  }
}