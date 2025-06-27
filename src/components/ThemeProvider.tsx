import {
  CssBaseline,
  CssVarsProvider, extendTheme,
  useColorScheme,
  useTheme,
} from '@mui/joy';
import React, { useEffect } from 'react';

export const appTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: 'var(--joy-palette-neutral-50)',
        },
      },
    },
  },
  components: {
    JoyChip: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'outlined' && {
            border: `1px solid var(--joy-palette-${ownerState.color}-600)`,
          }),
        }),
      },
    },
  },
});

function Meta() {
  const { palette } = useTheme();

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = palette.common.white;
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, [palette]);

  return null;
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CssVarsProvider theme={appTheme} defaultMode="light">
      <CssBaseline />
      <Meta />
      {children}
    </CssVarsProvider>
  );
}
