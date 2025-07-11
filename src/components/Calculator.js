import { useState, useEffect } from 'react';
import './Calculator.css';
import { Paper, TextField, Typography, Box } from '@mui/material';

const Calculator = () => {
  const [income, setIncome] = useState(0);
  const [costs, setCosts] = useState(0);
  const [servicePrice, setServicePrice] = useState(0);
  const [servicePriceCost, setServicePriceCost] = useState(0);
  const [servicePriceNetto, setServicePriceNetto] = useState(0);
  const [costParameter, setCostParameter] = useState(0);
  const [employeePart, setEmployeePart] = useState(0.25);

  const setIncomeValue = (e) => {
    setIncome(Number(e.target.value));
  };
  const setCostValue = (e) => {
    setCosts(Number(e.target.value));
  };

  const makeCalculation = () =>{
    setCostParameter((costs/income).toFixed(2));
    setServicePriceCost((servicePrice * costParameter).toFixed(2));
    setServicePriceNetto((servicePrice - servicePriceCost));
  };

    const setEmployeePartValue = (e) => {
    setEmployeePart((e.target.value));
  };


  useEffect(()=>{
    makeCalculation();
  },[income, costs, servicePrice, servicePriceNetto])

  return (
    <Paper className='calc-container' elevation='8'>
      <Box sx={{
        p:'24px',
        display:'flex',
        flexDirection:'column',
        gap:'1rem'
      }}>
        <TextField
          label="Przychód"
          type='number'
          variant="standard"
          onChange={setIncomeValue}
        />
        <TextField
          label="Koszty"
          type='number'
          variant="standard"
          onChange={setCostValue}
        />
        <Typography>Współczynnik: {income === 0 || costs === 0 ? '' : costParameter}</Typography>
        <TextField
         label="Montaż"
         type='number'
         variant='standard'
         onChange={(e)=>{setServicePrice(e.target.value)}}
         />
         <Typography>Za montaż netto: {servicePrice === 0 ? '' : servicePriceNetto }</Typography>
         <TextField
         label="Dla pracownika:"
         type='number'
         variant='standard'
         value={employeePart}
         onChange={setEmployeePartValue}
         />
         <Typography>Na rękę: {servicePrice === 0 ||  isNaN(employeePart) ? '' : (servicePriceNetto * employeePart)}</Typography>
      </Box>
    </Paper>
  );
};

export default Calculator;
