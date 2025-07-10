import { useState, useEffect } from 'react';
import './Calculator.css';
import { Paper, TextField, Typography, Box } from '@mui/material';

const Calculator = () => {
  const [income, setIncome] = useState(0);
  const [costs, setCosts] = useState(0);
  const [servicePrice, setServicePrice] = useState(0);
  const [costParameter, setCostParameter] = useState(0);
  const [employeePart, setEmployeePart] = useState(0.25);

  const setIncomeValue = (e) => {
    setIncome(Number(e.target.value));
  };
  const setCostValue = (e) => {
    setCosts(Number(e.target.value));
  };

  const getParameter = () =>{
    setCostParameter((costs/income).toFixed(2))
  }

  useEffect(()=>{
    getParameter();
  },[income, costs])

  return (
    <Paper className='calc-container'>
      <Box sx={{
        p:'24px',
        display:'flex',
        flexDirection:'column',
        gap:'1rem'
      }}>
        <TextField
          label="Przychód"
          variant="standard"
          onChange={setIncomeValue}
        />
        <TextField
          label="Koszty"
          variant="standard"
          onChange={setCostValue}
        />
        <Typography>Współczynnik: {income === 0 || costs === 0 ? '' : costParameter}</Typography>
        <TextField
         label="Montaż"
         variant='standard'
         onChange={(e)=>{setServicePrice(e.target.value)}}
         />
         <Typography>Za montaż netto: {servicePrice === 0 ? '' : servicePrice*costParameter}</Typography>
         <TextField
         label="Dla pracownika:"
         variant='standard'
         value={employeePart}
         />
         <Typography>Na rękę: {servicePrice === 0 ? '' : servicePrice * costParameter * employeePart}</Typography>
      </Box>
    </Paper>
  );
};

export default Calculator;
