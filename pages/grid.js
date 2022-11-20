import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const mdTheme = createTheme();

function DashboardContent() {
  return (
    <ThemeProvider theme={mdTheme}>
      1111
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
