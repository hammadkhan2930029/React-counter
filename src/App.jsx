import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';


const App = () => {
  const [value, setValue] = useState(0)
  const inc = () => {
    setValue(value + 1)
  }
  const dec = () => {
    setValue(value - 1)

  }
  const reset = () => {
    setValue(0)
  }

  return (
    <div className="main">
      <div className="count">
        <div className="counterValue">
          <h1>{value}</h1>
        </div>
        <Button variant="contained" onClick={inc}><AddIcon /></Button>
        <Button variant="contained" onClick={reset}>Reset</Button>
        {/* <Button variant="contained" onClick={dec}><RemoveIcon /></Button> */}
        {
          value <= 0 ?
            <Button variant="contained" disabled onClick={dec}><RemoveIcon /></Button>
            :
            <Button variant="contained" onClick={dec}><RemoveIcon /></Button>






        }

      </div>
    </div>




  )

}

export default App;
