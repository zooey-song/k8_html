//문자열 연습
let s = 'Hello JS!!';

console.log('문자열 : ', s);

console.log('문자열 길이 : ', s.length);

console.log('문자열 문자변환 : ', s.toUpperCase);

console.log('숫자확인 : ', isNaN(s));

console.log('첫번째 글자 : ', s.charAt(0));

console.log('첫번째 글자 : ', s[0]);

console.log('첫번째 글자 : ', s[s.length-1]);

console.log('첫번째 글자 : ', s.charAt(s.length-1));

console.log('첫번째 글자 : ', s.slice(-1));

console.log('문자열 분리 : ', s.split(" "));
console.log('문자열 분리 : ', s.split(""));

for(let c of s){
  console.log(c);
}//값을 그대로 가져옴

for (let i in s){
  console.log(i ,'=>',s[i]);
}//키를 가져옴

console.log("js문자열확인",s.includes("js"));
console.log("js문자열확인",s.indexOf("js"));

//문자열 자르기
console.log('문자열 자르기:',s.substring(5,0));
console.log('문자열 자르기:',s.slice(5,0));


// s = '1234';
// console.log('숫자확인 : ', isNaN(s));

// parseInt(s);
// console.log('문자열 : ', s);

// console.log('숫자확인 : ', isNaN(s));



