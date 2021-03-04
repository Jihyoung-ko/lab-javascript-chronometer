class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {  
  const intervalId = setInterval(() =>{

  this.currentTime++; 

}, 1000);
    // ... your code goes here
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
    // ... your code goes here
  }
  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
    // ... your code goes here
  }
  twoDigitsNumber(number) {
    if (number < 10){
      return `0${number}`;
    } else {
      return `${number}`;
    } 
    // ... your code goes here
  }

  stopClick() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {
    let minInTwoDigit = this.twoDigitsNumber(this.getMinutes());
    let secInTwoDigit = this.twoDigitsNumber(this.getSeconds());

    return minInTwoDigit + ":"+ secInTwoDigit;
    // ... your code goes here
  }
}
