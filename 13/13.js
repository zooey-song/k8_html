let isshuffle = false;
let arr = [0,0,0,0,0,0,0,0,1]

document.addEventListener('DOMContentLoaded', () => {
  const cols = document.querySelectorAll('.box');
  const bt = document.querySelector('#bt');
  const msg = document.querySelectorAll('#msg');


  bt.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!isshuffle){
      isshuffle = true;
      
      arr.sort(()=>Math.random()-0.5);
      console.log(arr);
      bt.innerHTML = '게임시작...'
    }
    else {

    }
  });

    
    for(let [idx, col] of cols.entries()){
      let cnt = 0
      col.addEventListener('click', ()=>{
        console.log(col, idx, isshuffle)
      if(!isshuffle) return ;
      if(col.innerHTML.includes('img')) return;

        // let idx= col.getAttribute('id').slice(-1) - 1;
        console.log(idx,arr[idx]);
        if(arr[idx] ==0){
          col.innerHTML = `<img src="../img/hart.png"/>`
          cnt = cnt++;//하트 갯수 세기

          //하트가 8개 되면 
          if(cnt == 8) {
            msg.innerHTML = '<h2>성공.</h2>'
            isshuffle = false;
          }
        }
        else{
          col.innerHTML = '<img src="../img/boom.png"/>'
          msg.innerHTML = '<h2>폭탄을 섞어주세요.</h2>'
          
        }
        if(col.innerHTML.includes('img')) return;
          console.log(idx ,arr[idx])

            
      
      });
    }
});