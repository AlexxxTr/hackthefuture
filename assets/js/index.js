const myHeaders = new Headers();

myHeaders.append('userId', 'nietdevoorlaatste362');

document.addEventListener("DOMContentLoaded", index)

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};


function index() {
    renderSuspects()
}

async function renderSuspects() {
    let res;
    await fetch("https://htf-2021.zinderlabs.com/suspect", requestOptions)
        .then(response => response.json())
        // .then(result => jsonSuspects(result))
        .then(result => res = result)
        .catch(err => console.log('error', err));
    res.forEach(generateSuspect)
}

function globalEvent(event, selector, cb) {
    document.addEventListener(event, e => {
        if(e.target.matches(selector)) cb(e)
    })
}
