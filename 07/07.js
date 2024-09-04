

const handleChange= (s1,s2,t1,t2)=>{
  if(s1.value ==='℃') s2.value = '℉';
  else s2.value = '℃';
  t1.innerHTML = s1.value;
  t2.innerHTML = s2.value;
  
  console.log('3');
  t1.value = '';
  t2.value = '';

};





document.addEventListener('DOMContentLoaded', ()=>{
  
  console.log('1');

  const sel1 = document.querySelector('#sel1');
  const sel2 = document.querySelector('#sel2');

  const txt1 = document.querySelector('#txt1');
  const txt2 = document.querySelector('#txt2');
  
  const lb1= document.querySelector('label[for=txt1]');
  const lb2= document.querySelector('label[for=txt2]');
  
  console.log(lb1, lb2);
  
  sel1.addEventListener('change',()=>{
    handleChange(sel1,sel2,lb1,lb2);
  });
  sel2.addEventListener('change',()=>{
    handleChange(sel2,sel1,lb2,lb1);
  });
  txt1.addEventListener('input',()=>{
    if(sel1.value === '℃'){
      txt2.value = parseFloat(parseFloat(txt1.value)*(9/5) +32);
    } 
    else{
      txt2.value = (parseFloat(txt1.value) -32) * (5/9).toFixed;
    }
  });


});