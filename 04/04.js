
document.addEventListener('DOMContentLoaded', () => {

  //버튼 요소 가져오기
  const bt1 = document.getElementById('bt1');
  const bt2 = document.querySelector('#bt2');
  const bt3 = document.querySelector('#bt3');
  const msg = document.querySelector('#msg');

  //console.log(bt1)
  //버튼 이벤트 달기
  bt1.addEventListener('click', () => {
//    alert('function함수');
    alert(bt1.innerHTML);
  });
  bt2.addEventListener('click', () => { 
//    alert('화살표 함수');
    alert(bt2.textContent);
  });
  bt3.addEventListener('click', () => {
        //msg.innerHTML = '<h2>랜덤수생성</h2>';
    //msg.innerHTML = '<h2>${msg.textContent}</h2>';
    let n = Math.floor(Math.random()*6)+1;
    console.log(n)

    msg.innerHTML = `<h2>${bt3.textContent}:<span>${n}</span><br><br></h2>`;
  });

  


});
