import {Box} from "@mui/material";
import HomeScreen from "./Screen/HomeScreen";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductDetailsScreen from "./Screen/ProductDetailsScreen";
function App() {
  return (
    <Box >
      <Router>
        <Routes>
          < Route exact path='/' element={<HomeScreen/>}/>
          < Route exact path='/product/details/:id' element={<ProductDetailsScreen/>}/>
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
