//App.js

import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Card, CardContent, CardMedia, Switch, Typography } from "@mui/material"

export default function App() {

  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
      primary: {
        main: '#90aaf9',
      },
      secondary: {
        main: '#131052',

      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Toggle Dark mode</h2>
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
        {/* rendering the card component with card content */}
        <Card sx={{ width: '30%', borderRadius: 3, padding: 1 }}>
          <CardContent>
            <CardMedia sx={{ height: 180, borderRadius: 3 }} image="https://static.vecteezy.com/system/resources/thumbnails/049/855/272/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" title="semaphore" />
            <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
              Embrace the Nature
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Your First Eco-friendly Platform
            </Typography>
            <Typography variant="body1">
              Checkout the latest blogs on environmental issues.
              Tell us about thoughts on improving those for future generation. 
              Be a part of our journey.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  )
}
