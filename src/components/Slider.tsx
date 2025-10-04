import { Slider as FSlider, type SliderProps as FSliderProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type SliderProps = FSliderProps & { vars?: CSSVarValues; style?: CSSProperties };

export function Slider({ vars, style, ...props }: SliderProps) {
  return <FSlider style={mergeStyleVars(style, vars)} {...props} />;
}
