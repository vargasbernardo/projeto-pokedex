export default function getPowerBar(stat) {
    let myStyle = { backgroundColor: '', width: '' };
  
    if (stat <= 10) {
      myStyle = { backgroundColor: 'red', width: '10%' };
    } else if (stat <= 30) {
      myStyle = { backgroundColor: 'orange', width: '30%' };
    } else if (stat <= 50) {
      myStyle = { backgroundColor: 'yellow', width: '50%' };
    } else if (stat <= 70) {
      myStyle = { backgroundColor: 'limegreen', width: '70%' };
    } else if (stat <= 90) {
      myStyle = { backgroundColor: 'green', width: '90%' };
    } else if (stat <= 100) {
      myStyle = { backgroundColor: 'darkgreen', width: '100%' };
    } else if (stat >= 100) {
        myStyle = { backgroundColor: 'darkgreen', width: '100%' };
    }
  
    return myStyle;
}