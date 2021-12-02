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
    .then(response => response.text())
    .then(result => renderSmallSuspectView(result))
    .then(() => function(){
        suspectContainer = document.querySelector("#suspects")
        for(let suspect in this.suspects){
            suspectContainer.innerHTML += `
                
            `;
        }
    }).catch(err => console.log('error', err));
}