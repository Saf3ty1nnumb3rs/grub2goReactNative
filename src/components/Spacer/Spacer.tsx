import { ViewProps } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';
import { useTheme } from 'styled-components/native';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

interface SpacerProps extends ViewProps {
  position: keyof typeof positionVariant;
  size: keyof typeof sizeVariant;
  children: React.ReactNode | React.ReactNode[] | null;
}
const getVariant = (
  position: SpacerProps['position'],
  size: SpacerProps['size'],
  theme: DefaultTheme,
) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};
const SpacerView = styled.View<{ variant: string }>`
  ${({ variant }) => variant};
`;
export const Spacer = ({ position, size, children }: SpacerProps) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
