globalEvent('click', '#suspects > div, #suspects > div *', showDetails);

function showDetails(e) {
    let suspectId = e.target.getAttribute('id') ?? e.target.closest('div').getAttribute('id'), suspects = JSON.parse(localStorage.getItem('suspects'));
    let { id, name, suspiciousness, imgSrc, car, alibi, motive } = suspects.find(v => v.id === suspectId);
    let div = document.querySelector('.detail');
    div.innerHTML = `<div class="detail mt-4 flex flex-col justify-between items-start">

    <h3 class="text-xl font-bold text-center">Details</h3>

    <h2 id="nameSuspect" class="font-bold">Name: ${name}</h2>

    <img src="${imgSrc}" alt="${name}" />

    <p>Suspicousness: ${suspiciousness}</p>

    <p>Alibi: ${alibi ?? "This person does not have an alibi!"}</p>

    <p>Motive: ${motive ?? "This person has no motive"}</p>

    <p>Car Sightings: This persons car was seen in ${car.sighting.location} from ${car.sighting.startTime} to ${car.sighting.endTime}</p>

</div>`
}