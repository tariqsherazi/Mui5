import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { createTheme,ThemeProvider } from '@emotion/styled';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme=createTheme({
  palette:{
    primary:{
      main:'#000'
    },
    secondary:{
      main:'#000'
    }
  },
  typography:{
    allVariants:{
      fontSize:15,
      textTransform:'none'
    }
  },
  components:{
    MuiTypography:{
    defaultProps:{
      sx:{px:1},
      variant:'subtitle',
      textTransform:'capitalize'
    },
  },
    MuiStack:{
    defaultProps:{

   sx:{px:2,py:1},
   direction:'row',
   spacing:0,
    },
  },
  MuiButton:{
    defaultProps:{
      size:'small',
      p:0,
      disableRipple:true,
      variant:'text',
      textTransform:'capitalize'
    }
  },
  MuiLink:{
    defaultProps:{
      underline:'none'
    }
  },
  MuiMenu:{
    defaultProps:{
      padding:1,
      spacing:1

    }
  },
  MuiListItem:{
    defaultProps:{
      margin:1,
      padding:0,
    }
  }
  },
  
  spacing:1,
  margin:1,
  padding:1,
  
  // menu: {
  //   "& .MuiPaper-root": {
  //     backgroundColor: "lightblue"
  //   }
  // }
})
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
