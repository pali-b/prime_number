module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	},
	outputResults: function(primeNumbers) {
		for(i = 0; i < primeNumbers.length ; i++) {
			console.log(primeNumbers[i]);
		}
	}
}

