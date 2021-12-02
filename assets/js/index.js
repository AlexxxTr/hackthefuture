const myHeaders = new Headers();

myHeaders.append('userId', 'nietdevoorlaatste362');

document.addEventListener("DOMContentLoaded", index)

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};


function index() {
    if (!localStorage.getItem('suspects')) renderSuspects()
    res = JSON.parse(localStorage.getItem('suspects'));    
    res.forEach(generateSuspect)
}

async function renderSuspects() {
    let res;
    await fetch("https://htf-2021.zinderlabs.com/suspect", requestOptions)
        .then(response => response.json())
        .then(result => jsonSuspects(result))
        .then(result => res = result)
        .catch(err => console.log('error', err));
    localStorage.setItem("suspects", JSON.stringify(res));
}

function globalEvent(event, selector, cb) {
    document.addEventListener(event, e => {
        if(e.target.matches(selector)) cb(e)
    })
}
