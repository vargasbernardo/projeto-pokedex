
export default  function addLeadingZero(number) {
    return number < 10 ? "0" + number : number.toString();
}