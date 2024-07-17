import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { shadows } from './shadows';
import { borderRadius } from './borderRadius';
import { breakpoints } from './breakPoints';

export const theme = {
	colors,
	spacing,
	typography,
	shadows,
	borderRadius,
	breakpoints
} as const;

export type Theme = typeof theme;
