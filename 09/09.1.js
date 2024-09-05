document.addEventListener('DOMContentLoaded', ()=>{
  //요소 가져오기
  const txt1 = document.querySelector('#txt1');
  const txt2 = document.querySelector('#txt2');
  
  const bt1 = document.querySelector('#bt1') ;
  const bt2 = document.querySelector('#bt2') ;

  //버튼이 눌려졌을때 회문
  bt1.addEventListener('click', (e)=>{
    e.preventDefault();
    let s1 = txt1.value ;
    let s2 = '';
    s1 = txt1.value.replaceAll('','');

  //  for (let i = s1.lengh -1 ; i >= 0 ; i--){
  //    s2 = s2+ s1[i];

  //  }

    s2= s1.split('').reverse().join('');



    console.log("s1 ",s1);
    console.log("s2 ",s2);

    if(s1.length == '') txt2.value="문자가 없습니다."
    else{
      if(s1 == s2) txt2.value='회문입니다.'
      else{
      txt2.value="회문이 아닙니다."
      }  
    }

    txt1.focus();
  });
  bt2.addEventListener('click', (e)=>{
    e.preventDefault();

    let sum = 0;
    let cnt = 0;
    for(let i of txt1.value){
      if(i != ' ' && !isNaN(i)){
        sum = sum + parseInt(i) ;
        cnt++;
      }

//      console.log("txt : ",txt1.value);
//      console.log("i : ",i);
//      console.log("sum : ",sum);
      
    }
    if(cnt == 0) 
      txt2.value = "숫자가 없습니다.";
    else
      txt2.value = "합계는 "+sum+"입니다.";
    txt1.focus();


  });

});