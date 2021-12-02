const myHeaders = new Headers();

myHeaders.append('userId', 'nietdevoorlaatste362');

document.addEventListener("DOMContentLoaded", index)

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};


function index(){
    renderSuspects()
}

function renderSuspects(){
    fetch("https://htf-2021.zinderlabs.com/suspect", requestOptions)
    .then(response => response.json())
    .then(result => createCompleteSuspectsjson(result))
    .then(res => (res) => {
        console.log(res)
    }).catch(err => console.log('error', err));
}
