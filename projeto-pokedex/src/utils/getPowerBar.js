export default function getPowerBar(stat) {
  let myStyle = { backgroundColor: '', width: '' };

  if (stat <= 5) {
    myStyle = { backgroundColor: 'red', width: '5%' };
  } else if (stat <= 10) {
    myStyle = { backgroundColor: 'red', width: '10%' };
  } else if (stat <= 15) {
    myStyle = { backgroundColor: 'red', width: '15%' };
  } else if (stat <= 20) {
    myStyle = { backgroundColor: 'red', width: '20%' };
  } else if (stat <= 25) {
    myStyle = { backgroundColor: 'orangered', width: '25%' };
  } else if (stat <= 30) {
    myStyle = { backgroundColor: 'orangered', width: '30%' };
  } else if (stat <= 35) {
    myStyle = { backgroundColor: 'orangered', width: '35%' };
  } else if (stat <= 40) {
    myStyle = { backgroundColor: 'orangered', width: '40%' };
  } else if (stat <= 45) {
    myStyle = { backgroundColor: 'yellow', width: '45%' };
  } else if (stat <= 50) {
    myStyle = { backgroundColor: 'yellow', width: '50%' };
  } else if (stat <= 55) {
    myStyle = { backgroundColor: 'yellow', width: '55%' };
  } else if (stat <= 60) {
    myStyle = { backgroundColor: 'yellow', width: '60%' };
  } else if (stat <= 65) {
    myStyle = { backgroundColor: 'limegreen', width: '65%' };
  } else if (stat <= 70) {
    myStyle = { backgroundColor: 'limegreen', width: '70%' };
  } else if (stat <= 75) {
    myStyle = { backgroundColor: 'limegreen', width: '75%' };
  } else if (stat <= 80) {
    myStyle = { backgroundColor: 'limegreen', width: '80%' };
  } else if (stat <= 85) {
    myStyle = { backgroundColor: 'darkgreen', width: '85%' };
  } else if (stat <= 90) {
    myStyle = { backgroundColor: 'darkgreen', width: '90%' };
  } else {
    myStyle = { backgroundColor: 'darkgreen', width: '100%' };
  }

  return myStyle;
}