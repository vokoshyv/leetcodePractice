/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
	var work = this.toString();

	var chunk = '';

	var nextWork = [];

	for (var i = work.length-1; i > -1; i--){
		chunk = work[i] + chunk;
		if (chunk.length === 3){
			nextWork.push(chunk);
			chunk = '';
		}
	}

	if (chunk.length > 0){
		nextWork.push(chunk);
	}
	console.log(nextWork);

	var workWithThree = function(input){
		var work = '';
		var numerical = Number(input);

		if (numerical === 0){
			return work;
		}
		if (numerical > 99){
			work += (numbersToWords[Math.floor(numerical / 100)] + ' ' + 'hundred')
		}
		if (numerical < 21){
			work += (work.length === 0)? numbersToWords[numerical] : ' ' + numbersToWords[numerical % 100];
		}
		console.log(work);
	}

};




