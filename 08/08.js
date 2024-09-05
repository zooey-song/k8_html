document.addEventListener('DOMContentLoaded', ()=>{
  //이미지 가져오기
  const imgs = document.querySelectorAll('.dice > img') ;
  //버튼 가져오기
  const bts = document.querySelectorAll('button') ;
  //결과 가져오기 
  const msg = document.querySelector('secDice') ;
  
  //console.log(bts);
  const random_wide = 10;
  let randomN = Math.floor(Math.random() * random_wide)+1;
  let flag = true;
  
  //버튼 클릭
  bts[0].addEventListener('click', (e)=>{
    e.preventDefault();
    const inputN = document.getElementById("txt1").value;
    
    if (!flag){
      console.log('다시시작');

      imgs[0].setAttribute('src',`../img/what.png`);
      randomN = Math.floor(Math.random() * random_wide)+1;
      txt1.style.display = 'inline';
      txt1.value = '';
      bts[0].innerHTML = '확인';
      flag = true;
      
    }
    else{
      console.log("시작",randomN);

      if (inputN > randomN){
        imgs[0].setAttribute('src',`../img/down.png`);
        //MAX_num = inputN;
      }
      else if(inputN < randomN){
        imgs[0].setAttribute('src',`../img/up.png`);
        //MIN_num = inputN;
      }
      else if(inputN == randomN){
        imgs[0].setAttribute('src',`../img/good.png`);
        txt1.style.display = 'none';
        txt1.focus();
        bts[0].innerHTML = '번호를 다시 생성하세요';
        inputN.value = '';
        flag = false;
      }
  }


  });
  

/*   for(let bt of bts){
     bt.addEventListener('click', ()=>{
       let comN = Math.floor(Math.random() * 6)+1;
       let userN = parseInt(bt.textContent.charAt(0));
       //console.log(bt.textContent.charAt(0));
       
      imgs[0].setAttribute('src',`../img/${comN}.png`);
      imgs[0].setAttribute('alt','computer num ${comN}');

      imgs[1].setAttribute('src',`../img/${userN}.png`);
      imgs[1].setAttribute('alt','user num ${userN}');

       if(comN === userN) msg.innerHTML = '맞음';
       else msg.innerHTML = '틀림';

     });
   };*/
});