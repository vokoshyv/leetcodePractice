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
  // 10: 'ten',
  // 100: 'hundred',
  1: 'thousand',
  2: 'million',
  3: 'billion',
  4: 'trillion',
  5: 'quadrillion',
  6: 'quintillion',
};

Number.prototype.toEnglish = function () {
	var work = this.toString();
	var chunk = '';
	var nextWork = [];

	if (this.valueOf() === 0) {return 'zero'};

	// create the chunks of three numbers
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

	// function that gives back the English result for three number string
	var workWithThree = function(input){
		var work = '';
		var numerical = Number(input);

		if (numerical === 0){
			return work;
		}
		if (numerical > 99){
			work += (numbersToWords[Math.floor(numerical / 100)] + ' ' + 'hundred')
		}
		if (numerical % 100 < 21 && numerical % 100 > 0){
			work += (work.length === 0)? numbersToWords[numerical % 100] : ' ' + numbersToWords[numerical % 100];
		} 
		if (numerical % 100 < 100 && numerical % 100 > 20){
			if (numerical % 10 === 0){
				work += (work.length === 0)? numbersToWords[numerical % 100] : ' ' + numbersToWords[numerical % 100];
			} else {
				work += (work.length === 0)? numbersToWords[Math.floor(numerical % 100 / 10) * 10] + '-' + numbersToWords[numerical % 10] : ' ' + numbersToWords[Math.floor(numerical % 100 / 10) * 10] + '-' + numbersToWords[numerical % 10];
			}
		}
		return work;
	}

	// changes all of the three number strings to English
	nextWork = nextWork.map(function(value){
		return workWithThree(value);
	})

	console.log(nextWork);

	var result = nextWork[0];

	// combines English words together, adding in number places as appropriate 
	for (var i = 1; i < nextWork.length; i++){
		if (nextWork[i].length === 0){
			continue;
		}
		if (nextWork[i].length > 0){
			result = nextWork[i] + ' ' + numbersToPlace[i] + ' ' + result;
		}
	}

	return result;
};


// for (var i = 0; i < 1001; i++){
// 	console.log((i).toEnglish());
// }


