const h = document.querySelector("h3")



function toDay(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    h.innerText = `${year}년 ${month+1}월 ${date}일`
}

toDay();
setInterval(toDay, 1000);