document.addEventListener('DOMContentLoaded', ()=>{
  //이미지 가져오기
  const imgs = document.querySelectorAll('.dice > img') ;
  //버튼 가져오기
  const bts = document.querySelectorAll('button') ;
  //결과 가져오기 
  const msg = document.querySelector('#msg') ;

  //console.log(bts);

  //버튼 클릭
  bts[0].addEventListener('click', ()=>{
    
  });
   for(let bt of bts){
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
   };
});