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
    .then(suspects => function(suspects){
        suspectContainer = document.querySelector("#suspects")
        for(suspect in suspects){
            suspectContainer.innerHTML += `
                
            `;
        }
    }).catch(err => console.log('error', err));
};
