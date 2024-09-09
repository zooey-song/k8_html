let arr = [1,2,3,4,5];
//let arr = new Array(1,2,3,4,5);

console.log('arr = ',arr);
console.log('arr 크기 ',arr.length);//요소 개수

//배열요소 접근
console.log('맨처음 요소 접근 : ', arr[0]);
console.log('맨처음 요소 접근 : ', arr[1]);

console.log('for....');
for (let i =0; i < arr.length; i++){
  console.log(`${i+1}번째 : ${arr[i]}`);
}

console.log('for in....');
for(let i in arr){
  console.log(`${parseInt(i)+1}번째 : ${arr[i]}`);
}

console.log('for of....');
for(let item of arr){
  console.log(`${item}:${item%2==0? "짝":"홀"}`);
}

console.log('entries....');
for(let [i,item] of arr.entries()){
  console.log(`${parseInt(i)+1}번째 : ${item}:${item%2==0? "짝":"홀"}`);
}

console.log('forEach....');
arr.forEach((i,item)=>{
  console.log(`${parseInt(i)+1}번째 : ${item}:${item%2==0? "짝":"홀"}`);
});





//arr.length = 0;
//arr = []

console.log('arr = ',arr);

arr.push(6);
console.log('push arr = ',arr);

arr.pop();
console.log('pop arr = ',arr);

//배열 array는 순서가 중요, 스택처럼 추가. obj 키 값으로 찾음.

arr.unshift(6);
console.log('unshift arr = ',arr);

arr.shift();
console.log('shift arr = ',arr);

let arr2 = arr.splice(2,2);//인덱스, 개수 인덱스부터 2개 없앰. 없앤 배열을 리턴
console.log('splice arr = ',arr);
console.log('splice arr2 = ',arr2);

arr.splice(2,1);//삭제
console.log('splice1 삭제 2,1 arr = ',arr);

arr.splice(2,1,'e');//변경
console.log('splice2 변경 2,1,'+'e'+' arr = ',arr);

arr.splice(2,0,3);//추가
console.log('splice3 추가 2,0,3 arr = ',arr);


arr = [1,2,3,4,5];

arr2.length = 0;
for(let item of arr){
  let item2 = item * 2;
  arr2.push(item2);
}
console.log('arr for문으로 복사 결과 arr2:',arr2);

arr2.length = 0;
arr2 = arr.map((item)=>{
  let item2 = item * 2;
  return item2;
});
console.log('arr map 결과 arr2:',arr2);

//call back함수에서 매개변수가 1개면 ()생략가능
//body에 return이 있으면 {}와 return 생략가능
arr2.length = 0;
arr2 = arr.map(item=> item * 2);
console.log('arr map 결과2 arr2:',arr2);

arr2.length = 0;
arr2 = arr.map(item => (item % 2) ==0 ? '짝':'홀');
console.log('arr map 짝홀 결과 arr2:',arr2);

arr2=[];
for(let item of arr){
  if (item % 2 == 0) arr2.push(item);
}
console.log('arr map for 짝수 결과 arr2:',arr2);

arr2.length = 0;
arr2 = arr.filter(item=> item %2 == 0);
console.log('arr map filter짝수 결과 arr2:',arr2);

arr = [4,5,1,2,3];
console.log(arr);


console.log(`${arr} => 정렬 ${arr.sort((a,b)=>b-a)}`);



