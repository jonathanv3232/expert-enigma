for(let i = 0; i < 10; i++) {
	console.log(i + ' with for loop');
	if(i === 4) {
		while(i < 9) {
			i++;
			console.log(i + ' with while loop')
		}
	}
}
