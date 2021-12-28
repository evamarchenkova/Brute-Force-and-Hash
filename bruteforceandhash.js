let fs = require('fs');
let arg = process.argv;
string = fs.readFileSync('string.txt');
string = string.toString();
substring = arg[2];
substring = substring.toString();
let hashString = 0;
let t = string.slice(0, substring.length);
for (i = 0; i < t.length; i++){
	hashString += t.charCodeAt(i);
}
let hashSubstring = 0;
for (i = 0; i < substring.length; i++){
	hashSubstring += substring.charCodeAt(i);
}
for (i = 0; i < string.length - substring.length + 1; i++){
	t = string.slice(i, i + substring.length);
	if (hashString == hashSubstring){
		if (t == substring){
			console.log(i + 1);
		}
	}
	hashString += - string.charCodeAt(i) + string.charCodeAt(i + substring.length);
}