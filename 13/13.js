  //어제 날짜 구하기 함수
  const getYesterday= ()=>{
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate()-1);
    

    const year = yesterday.getFullYear();
    let month = yesterday.getMonth() +1;
    let day = yesterday.getDate();

    // month = month < 10 ? '0'+month : month;
    // day = day < 10 ? '0'+day : day;
    
    month = '0' + month.toString().slice(-2);
    day = '0' + day.toString().slice(-2);
    
    console.log('month : ',month);
    console.log('day : ',day);
    

    return `${year}-${month}-${day}`;
  }
  
//open api 데이터 가져오기
const getData = (selDt, ul)=>{
  console.log(selDt);
  const testAPI = '82ca741a2844c5c180a208137bb92bd7';
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
  url = `${url}key=${testAPI}&targetDt=${selDt}`

  console.log(url);

  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(dailyBoxOfficeList);

    let tm=dailyBoxOfficeList.map(item=>
      `<li class = 'mvli'> 
        <span class = 'rank'>${item.rank}</span>
        <span class = 'movieNm'><a href="">${item.movieNm}</a></span>
      </li>`);
      tm=tm.join('');
      ul.innerHTML(tm);
      console.log(tm);
  })
  .catch(err => console.log(err));




}
  
  
  //DOM 생성후
  document.addEventListener('DOMContentLoaded', ()=>{

    //가져오기
      //요소 가져오기
  const dt = document.querySelector('#dt') ;
  const ul = document.querySelector('.sec > ul') ;


    //어제 날짜 구하기
    let yesterday = getYesterday();

    console.log('yesterday: ', yesterday);
    console.log('yesterday: ', getYesterday());

    //date요소의 최대값을 결정
    dt.max = yesterday;

    dt.addEventListener('change', ()=>{
      getData(dt.value.replaceAll('-',''), ul);
    }) ;




});
