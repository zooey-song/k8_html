
//DOM 생성후
document.addEventListener('DOMContentLoaded', () => {

  //가져오기
  //요소 가져오기
  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sec > ul');


  //어제 날짜 구하기
  let yesterday = getYesterday();

  console.log('yesterday: ', yesterday);
  console.log('yesterday: ', getYesterday());

  //date요소의 최대값을 결정
  dt.max = yesterday;
  dt.value = yesterday;

  //첫페이지
  getData(dt.value.replaceAll('-', ''), ul,sel1.value);

  
  dt.addEventListener('change', () => {
    getData(dt.value.replaceAll('-', ''), ul,sel1.value);
  });

  sel1.addEventListener('change',()=>{

    console.log(sel1.value);
    getData(dt.value.replaceAll('-',''),ul,sel1.value)
  });

  
});



//어제 날짜 구하기 함수
const getYesterday = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1);


  const year = yesterday.getFullYear();
  let month = yesterday.getMonth() + 1;
  let day = yesterday.getDate();

 month = month < 10 ? '0'+month : month;
   day = day < 10 ? '0'+day : day;

  //month = '0' + month.toString().slice(-1);
  //day = '0' + day.toString().slice(-2);

  console.log('month : ', month);
  console.log('day : ', day);


  return `${year}-${month}-${day}`;
}

//open api 데이터 가져오기
const getData = (selDt, ul, gubun) => {
  console.log(selDt);
  const testAPI = '82ca741a2844c5c180a208137bb92bd7';
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
  url = `${url}key=${testAPI}&targetDt=${selDt}`
  if (gubun != 'F') {
    url = `${url}&repNationCd=${gubun}`;
  }

  console.log(url);

  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(dailyBoxOfficeList);

      let tm = dailyBoxOfficeList.map(item =>
        `<li class = 'mvli'> 
        <span class = 'rank'>${item.rank}</span>
        <span class = 'movieNm'><a href="">${item.movieNm}</a></span>
        <span class = 'openDt'>${item.openDt}</span>
        <span class = 'rankInten'>${item.rankInten>0?'👍':'👎'}${item.rankInten}</span>
      </li>`);
      tm = tm.join('');
      ul.innerHTML = tm;
      
    })
    .catch(err => console.log(err));

};


