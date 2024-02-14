
//Start Ratio Calculator

const container = document.querySelector('.container');
const label = document.querySelector('.label');
const results = document.querySelector('.results');
const form = document.querySelector('.form');

function openRatioCalculator () {
  //create close button
  const closeButton = document.createElement('button');
  const closeButtonContent = document.createTextNode('X')
  closeButton.className='close';
  closeButton.appendChild(closeButtonContent);
  closeButton.addEventListener('click', closeRatioCalculator);

  //create input amount
  const amountInput = document.createElement('input');
  const amountLabel = document.createElement('label');
  const amountLabelContent = document.createTextNode('How Much Amount: ');
  amountLabel.appendChild(amountLabelContent);
  amountInput.id = 'amount';
  amountInput.setAttribute('type', 'number');
  amountInput.setAttribute('value', '1');
  amountInput.setAttribute('name', 'amount');
  amountInput.setAttribute('for', 'amount');

  //create input days
  const daysInput = document.createElement('input');
  const daysLabel = document.createElement('label');
  const daysLabelContent = document.createTextNode('How Many Days: ');
  daysLabel.appendChild(daysLabelContent);
  daysInput.id = 'days';
  daysInput.setAttribute('type', 'number');
  daysInput.setAttribute('value', '1');
  daysInput.setAttribute('name', 'days');
  daysLabel.setAttribute('for', 'days');

  //create input ratio
  const ratioInput = document.createElement('input');
  const ratioLabel = document.createElement('label');
  const ratioLabelContent = document.createTextNode('Enter Ratio: ');
  ratioLabel.appendChild(ratioLabelContent);
  ratioInput.id = 'ratio';
  ratioInput.setAttribute('type', 'number');
  ratioInput.setAttribute('value', '1');
  ratioInput.setAttribute('name', 'ratio');
  ratioLabel.setAttribute('for', 'ratio')

  //create input submit 
  const calculationButton = document.createElement('input');
  calculationButton.setAttribute('type', 'submit');
  calculationButton.setAttribute('value', 'Calculate');
  calculationButton.addEventListener('click', handleCalculation);
  //create input clear
  const clearButton = document.createElement('input');
  clearButton.setAttribute('type', 'submit');
  clearButton.setAttribute('value', 'Reset');
  clearButton.addEventListener('click', handleReset);
  
  //console.log(daysInput)
  if (form.innerHTML === ''){
    form.appendChild(amountLabel);
    form.appendChild(amountInput);
    form.appendChild(daysLabel);
    form.appendChild(daysInput);
    form.appendChild(ratioLabel);
    form.appendChild(ratioInput);
    form.appendChild(calculationButton);
    form.appendChild(clearButton);
    form.appendChild(closeButton);
  }
}

function closeRatioCalculator (){
  form.innerHTML = '';
  results.innerHTML = '';
  label.innerHTML = '';
}

function handleCalculation (){
  let sum;
  results.innerHTML = '';
  label.innerHTML = '';
  let amount = parseFloat(document.querySelector('.form input[name = amount]').value);
  const days = parseInt(document.querySelector('.form input[name = days]').value);
  const ratio = parseFloat(document.querySelector('.form input[name = ratio]').value);
  
   //Create Summary of situation 
   const summaryParagraph = document.createElement('p');
   const startAmountParagraph = document.createElement('p');
   const daysParagraph = document.createElement('p');
   const ratioParagraph = document.createElement('p');
      
   summaryParagraph.innerText = 'Short Summary';
   startAmountParagraph.innerHTML = `Start Amount: <span>${amount}</span> Kr`;
   daysParagraph.innerHTML = `The Number of days: <span>${days}</span> day`;
   ratioParagraph.innerHTML = `The Ratio: <span>${ratio}</span> %`;
   
   if(label.innerHTML === '') {
     label.appendChild(summaryParagraph);
     label.appendChild(startAmountParagraph);
     label.appendChild(daysParagraph);
     label.appendChild(ratioParagraph);
   }
      
  //crate title of the results
  const title = document.createElement('div');
  const titleParagraph = document.createElement('p');
  const resultTitle = document.createElement('div');
  const numberOfDay = document.createElement('p');
  const amountOfDay = document.createElement('p');
  const resultOfDay = document.createElement('p');

  titleParagraph.innerText = 'Result Tabel';
  numberOfDay.innerText = 'The Number Of Day';
  amountOfDay.innerText = 'The Amount Of Day (Kr)';
  resultOfDay.innerText = 'The Result Of Day (Kr)';

  title.appendChild(titleParagraph);
  resultTitle.appendChild(numberOfDay);
  resultTitle.appendChild(amountOfDay);
  resultTitle.appendChild(resultOfDay);
  results.appendChild(title);
  results.appendChild(resultTitle);

  for (let i = 0; i < days; i++){
    const result = document.createElement('div');
    const numberOfParagraph = document.createElement('p');
    const amountParagraph = document.createElement('p');
    const resultParagraph = document.createElement('p');
   
    sum = ((ratio/100) * amount) + amount;

    numberOfParagraph.innerText = `${i + 1}`;
    amountParagraph.innerText = `${amount.toFixed(0)}`;
    resultParagraph.innerText = sum.toFixed(0);
    amount = sum;

    result.appendChild(numberOfParagraph);
    result.appendChild(amountParagraph);
    result.appendChild(resultParagraph);
    results.appendChild(result);
  }
   //Create Final Result paragraph
  const finalResultParagraph = document.createElement('p');
  finalResultParagraph.innerHTML = `The Final Result: <span>${sum.toFixed(0)}</span> Kr`;
  label.appendChild(finalResultParagraph);
}

function handleReset (){
  const amount = document.querySelector('.form input[name = amount]');
  const days = document.querySelector('.form input[name = days]');
  const ratio = document.querySelector('.form input[name = ratio]');

  amount.value = 0;
  days.value = 0;
  ratio.value = 0;
  results.innerHTML = '';
  label.innerHTML = '';
}

//End Ratio Calculator

//Statr Normal Calculator
function openCalculator () {
  //create close button
  const closeButton = document.createElement('button');
  const closeButtonContent = document.createTextNode('X')
  closeButton.className='close';
  closeButton.appendChild(closeButtonContent);
  closeButton.addEventListener('click', closeRatioCalculator);
  
  //create calculator container
  // const container = document.querySelector('.container');
  const calculator = document.createElement('div');
  calculator.className = 'calculator';
  const calculatorTitle = document.createElement('p');
  const titleContent = document.createTextNode('Calculator');
  calculatorTitle.appendChild(titleContent);
  calculator.appendChild(calculatorTitle);

  //Create Result Screen
  const screen = document.createElement('div');
  const resultScreen = document.createElement('div');
  const operationScreen = document.createElement('div');
  screen.className = 'screen';
  resultScreen.className = 'result-screen';
  operationScreen.className = 'operation-screen';
  screen.appendChild(resultScreen);
  screen.appendChild(operationScreen);
  calculator.appendChild(screen);

  //create calculator symbols buttons
  const symbols = document.createElement('div');
  symbols.className = 'symbols';
  calculator.appendChild(symbols);

  //'C'
  const reset = document.createElement('div');
  const resetC = document.createTextNode('C');
  reset.appendChild(resetC);
  reset.className='C';
  symbols.appendChild(reset);
  //'()'
  const parentheses = document.createElement('div');
  const parenthesesC = document.createTextNode('()');
  parentheses.appendChild(parenthesesC);
  parentheses.className='()';
  symbols.appendChild(parentheses);
  //'%'
  const ratio = document.createElement('div');
  const ratioC = document.createTextNode('%');
  ratio.appendChild(ratioC);
  ratio.className='%';
  symbols.appendChild(ratio);
  //'/'
  const division = document.createElement('div');
  const divisionC = document.createTextNode('/');
  division.appendChild(divisionC);
  division.className='/';
  symbols.appendChild(division);
  //'7'
  const num7 = document.createElement('div');
  const num7C = document.createTextNode('7');
  num7.appendChild(num7C);
  num7.className='7';
  symbols.appendChild(num7);
  //'8'
  const num8 = document.createElement('div');
  const num8C = document.createTextNode('8');
  num8.appendChild(num8C);
  num8.className='8';
  symbols.appendChild(num8);
  //'9'
  const num9 = document.createElement('div');
  const num9C = document.createTextNode('9');
  num9.appendChild(num9C);
  num9.className='9';
  symbols.appendChild(num9);
  //'*'
  const multiple = document.createElement('div');
  const multipleC = document.createTextNode('*');
  multiple.appendChild(multipleC);
  multiple.className='*';
  symbols.appendChild(multiple);
  //'4'
  const num4 = document.createElement('div');
  const num4C = document.createTextNode('4');
  num4.appendChild(num4C);
  num4.className='4';
  symbols.appendChild(num4);
  //'5'
  const num5 = document.createElement('div');
  const num5C = document.createTextNode('5');
  num5.appendChild(num5C);
  num5.className='5';
  symbols.appendChild(num5);
  //'6'
  const num6 = document.createElement('div');
  const num6C = document.createTextNode('6');
  num6.appendChild(num6C);
  num6.className='6';
  symbols.appendChild(num6);
  //'-'
  const minus = document.createElement('div');
  const minusC = document.createTextNode('-');
  minus.appendChild(minusC);
  minus.className='-';
  symbols.appendChild(minus);
  //'1'
  const num1 = document.createElement('div');
  const num1C = document.createTextNode('1');
  num1.appendChild(num1C);
  num1.className='1';
  symbols.appendChild(num1);
  //'2'
  const num2 = document.createElement('div');
  const num2C = document.createTextNode('2');
  num2.appendChild(num2C);
  num2.className='2';
  symbols.appendChild(num2);
  //'3'
  const num3 = document.createElement('div');
  const num3C = document.createTextNode('3');
  num3.appendChild(num3C);
  num3.className='3';
  symbols.appendChild(num3);
  //'+'
  const plus = document.createElement('div');
  const plusC = document.createTextNode('+');
  plus.appendChild(plusC);
  plus.className='+';
  symbols.appendChild(plus);
  //'+/-'
  const signChange = document.createElement('div');
  const signChangeC = document.createTextNode('+/-');
  signChange.appendChild(signChangeC);
  signChange.className='+/-';
  symbols.appendChild(signChange);
  //'0'
  const num0 = document.createElement('div');
  const num0C = document.createTextNode('0');
  num0.appendChild(num0C);
  num0.className='0';
  symbols.appendChild(num0);
  //'.'
  const comma = document.createElement('div');
  const commaC = document.createTextNode('.');
  comma.appendChild(commaC);
  comma.className='.';
  symbols.appendChild(comma);
  //'='
  const equal = document.createElement('div');
  const equalC = document.createTextNode('=');
  equal.appendChild(equalC);
  equal.className='=';
  symbols.appendChild(equal);

  if (form.innerHTML === '') {
    form.appendChild(closeButton);
    form.appendChild(calculator);
  }

let enter1 = '';
let operation = '';
let enter2 = '';
let result = 0;

symbols.addEventListener('click', function (event) {
  console.log(event.target.className);
  const symbol = event.target.className;
  if(isNumeric(symbol)) handleNumericInput(symbol);
  else if(isOperator(symbol)) handleOperatorInput(symbol);
  else if(symbol === 'C') handleReset();
  else if(symbol === '=') handleEquals(symbol);
  else if(symbol === '+/-') handleSignChange(symbol);
});


function isNumeric (symbol) {
  return /^\d+$/.test(symbol) || symbol === '.';
};

function isOperator (symbol) {
  return ['+', '-', '*', '/'].includes(symbol);
}

function handleNumericInput (symbol) {
  if (operation === '' && enter2 === ''){
    enter1 += symbol;
  }
  else if(enter1 !== '' && operation !== ''){
    enter2 += symbol;
  }
  updateResultScreen();
};

function handleOperatorInput (symbol) {
 if(enter1 !== '') operation = symbol;
 updateOperationScreen(symbol);
};

function handleReset () {
  enter1 = '';
  operation = '';
  enter2 = '';
  result = 0;
  updateResultScreen();
  updateOperationScreen(operation);
};

function handleEquals(symbol) {
  updateOperationScreen(symbol);
  if (enter1 !== '' && operation !== '' && enter2 !== '') {
    calculateResult();
    enter1 = String(result);
    operation = '';
    enter2 = '';
    updateResultScreen();
  }
};

function handleSignChange (symbol) {
  updateOperationScreen(symbol);
  if (operation === '' && enter2 === '' ) enter1 = -1 * enter1;
  else if (enter1 !== '' && operation !== '' && enter2 !== '' ) {
      if (symbol !== '=') {
        enter2 = -1 * enter2;
        resultScreen.innerText = enter2;
      }
      else result = -1 * result;

  }
  updateResultScreen();
}

function calculateResult() {
  switch (operation) {
    case '+':
      result = Number(enter1) + Number(enter2);
      break;
    case '-':
      result = Number(enter1) - Number(enter2);
      break;
    case '*':
      result = Number(enter1) * Number(enter2);
      break;
    case '/':
      if (Number(enter2) !== 0) {
        result = Number(enter1) / Number(enter2);
      } else {
        handleReset(); // Division by zero, reset the calculator
        alert("Cannot divide by zero!");
        return;
      }
      break;
    default:
      break;
  }
}

function updateResultScreen() {
  resultScreen.innerText = operation !== '' ? enter2 : enter1;
}
function updateOperationScreen(symbol) {
  operationScreen.innerText = symbol;
}
}

//End Normal Calculator