
function generateSuspect({id, name, imgSrc}){
    let cont = document.querySelector('#suspects');
    cont.innerHTML += `<div id=${id} class="flex flex-col justify-between items-center border-2 rounded-md shadow-md p-6 m-4">
    <img src=${imgSrc} alt="${name}"/>
    <h1 class="text-center text-xl font-bold">${name}</h1>
    </div>`;
}



