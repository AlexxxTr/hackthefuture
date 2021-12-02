
async function createCompleteSuspectsjson(allSuspects){
    console.log(allSuspects);
    let allCars;
    await fetch("https://htf-2021.zinderlabs.com/car", requestOptions)
    .then(response => response.json())
    .then(result => allCars = result)

    for (let suspect of allSuspects){
        suspect.car = getCarSuspect(suspect.name, allCars);
    }
}

function getCarSuspect(suspectName, allCars){
    return allCars.find(i => i.owner == suspectName)
}
