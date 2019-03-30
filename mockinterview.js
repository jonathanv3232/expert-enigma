function partitions(str, partitionSize) {
	const allPartitions = [];
	let newStr = "";
	for(let i = 0; i < str.length; i++) {
		if(i % partitionSize === 0 && i != 0) {
			allPartitions.push(newStr);
			newStr = "";
        }
        newStr += str[i];
    }

    if(newStr != "") allPartitions.push(newStr);
    return allPartitions;
}
let str = 'aaaaaaa';

let ans = partitions(str, 3);
console.log(ans);

