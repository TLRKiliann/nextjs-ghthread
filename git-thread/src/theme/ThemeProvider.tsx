'use client';

// time video 19:42

import {ThemeProvider as NextThemesProvider} from 'next-themes';
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({children, ...props}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
/*
import type { ThemeProviderProps } from "next-themes/dist/types";
import {ThemeProvider as NextThemesProvider} from 'next-themes';

export const ThemeProvider = ({children, ...props}: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
*/