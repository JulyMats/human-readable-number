module.exports = function toReadable (number) {
  var fromZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let numberToStr = number.toString();
  const length = numberToStr.length;
  let result ='';

  for (let i = length; i > 0; i--) {
    if (i > 2) {
        result += `${fromZeroToNine[numberToStr[length - i]]} hundred `; 
    } else if (i > 1 && numberToStr[length - i] > 1) {
       result += `${tens[numberToStr[length - i]]} `; 
    } else if (i > 1 && numberToStr[length - i] == 1){
        result += `${teens[numberToStr[length - i + 1]]} `;
        i--;
    } else if (i == 1) {
        if (number == 0 || (numberToStr[length - i] != 0)) {
            result += `${fromZeroToNine[numberToStr[length - i]]} `; 
        }
    }
  }
  return result.trim();
}
