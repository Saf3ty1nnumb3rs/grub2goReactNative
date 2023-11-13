// styled.d.ts or a similar TypeScript definition file
import 'styled-components/native';

interface ColorSet {
  primary: string;
  secondary: string;
  [key: string]: string;
}

interface Colors {
  brand: ColorSet;
  ui: ColorSet & {
    tertiary: string;
    quaternary: string;
    disabled: string;
    error: string;
    success: string;
  };
  bg: Pick<ColorSet, 'primary' | 'secondary'>;
  text: ColorSet & {
    disabled: string;
    inverse: string;
    error: string;
    success: string;
  };
}

interface Fonts {
  body: string;
  heading: string;
  monospace: string;
}

interface FontWeights {
  regular: number;
  medium: number;
  bold: number;
}

interface FontSizes {
  caption: string;
  button: string;
  body: string;
  title: string;
  h5: string;
  h4: string;
  h3: string;
  h2: string;
  h1: string;
}

interface LineHeights {
  title: string;
  copy: string;
}

interface ThemeProps {
  colors: Colors;
  space: string[];
  lineHeights: LineHeights;
  sizes: string[];
  fonts: Fonts;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeProps {}
}
