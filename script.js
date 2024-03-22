function firstNonRepeatedChar(str) {
 // Write your code here
	let freq = new Array(26).fill(0);

	for(let i = 0; i < str.length; i++){
		freq[str.charCodeAt(i) - 'a'.charCodeAt()]++;
	}

	for(let i = 0; i < str.length; i++){
		if(freq[str.charCodeAt(i)-'a'.charCodeAt()] === 1){
			return str[i];
		}
	}
	return null
	
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
