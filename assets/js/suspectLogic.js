
async function createCompleteSuspectsjson(allSuspects){
    console.log(allSuspects);
    let allCars = await fetchFromApi("car")
    let allMotives = await fetchFromApi("motive")
    let fingerprints = (await fetchFromApi("fingerprint/Insulinespuit")).fingerprints;

    for (let suspect of allSuspects){
        suspect.car = allCars.find(i => i.owner == suspect.name);
        if (suspect.car){
            suspect.car.sighting = await fetchFromApi("sighting/" + "car/" + suspect.car.licenseplate);
        } 
        suspect.motive = allMotives.find(i => i.suspectId == suspect.id)?.text;
        suspect.alibi = (await fetchFromApi("alibi/" + suspect.id))[0]?.description;
        suspect.suspiciousness = await calculateSuspectSuspiciousness(suspect, fingerprints);
    }
    allSuspects.sort(dynamicSort('-suspiciousness'));
    console.log(allSuspects);
}

async function calculateSuspectSuspiciousness(suspect,fingerprints){
    let suspiciousness = 0;
    if (suspect.motive == undefined){
        suspiciousness -= 3;
    } else {
        suspiciousness += 5;
    }
    if (suspect.car && suspect.car.sighting[0]){
        let leaveHourCar = parseInt(suspect.car.sighting[0].endTime.split(":")[0])
        if (!(leaveHourCar <= 01 || leaveHourCar >= 11)){
            suspiciousness += 50;
        }
    }
    if (suspect.alibi){
        suspiciousness -= 3;
    } else {
        suspiciousness += 3;
    }
    
    if (fingerprints.includes(suspect.id)){
        suspiciousness += 20;
    }
    return suspiciousness;
}

function dynamicSort(property) {
    let sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
     return function (a,b) {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}


async function fetchFromApi(endpoint){
    let res;
    await fetch("https://htf-2021.zinderlabs.com/" + endpoint, requestOptions)
    .then(response => response.json())
    .then(result => res = result)
    .catch(error => console.log(error))
    return res;
}



