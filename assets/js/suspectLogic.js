
async function createCompleteSuspectsjson(allSuspects){
    console.log(allSuspects);
    let allCars = await fetchFromApi("car")
    let allMotives = await fetchFromApi("motive")

    for (let suspect of allSuspects){
        suspect.car = allCars.find(i => i.owner == suspect.name);
        suspect.motive = allMotives.find(i => i.suspectId == suspect.id)?.text;
    }

}

async function fetchFromApi(endpoint){
    let res;
    await fetch("https://htf-2021.zinderlabs.com/" + endpoint, requestOptions)
    .then(response => response.json())
    .then(result => res = result)
    return res;
}



