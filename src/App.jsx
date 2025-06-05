// App.js (or App.tsx)

import {
  Card,
  CardContent,
  CardMedia,
  createTheme,
  Switch,
  ThemeProvider,
  Typography,
  useColorScheme,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";

// Create a theme using the new CSS variable-based system
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-test-scheme-selector",
    cssVarPrefix: "test",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#90caf9",
        },
        secondary: {
          main: "#131052",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#90caf9",
        },
        secondary: {
          main: "#131052",
        },
      },
    },
  },
});

function Content() {
  const { mode, setMode } = useColorScheme();

  const toggleDarkTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h6" gutterBottom>
        Toggle Dark mode
      </Typography>
      <Switch checked={mode === "dark"} onChange={toggleDarkTheme} />
      <Card sx={{ width: "30%", borderRadius: 3, padding: 1 }}>
        <CardContent>
          <CardMedia
            sx={{ height: 180, borderRadius: 3 }}
            image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
            title="semaphore"
          />
          <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
            Programming Blogs
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            by Semaphore
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Checkout the latest blogs on Semaphore. Semaphore provides you the
            best CI/CD solution for high-performance engineering teams.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Content />
    </ThemeProvider>
  );
}
