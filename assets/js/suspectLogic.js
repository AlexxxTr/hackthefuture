
async function jsonSuspects(allSuspects) {
    let allCars = await fetchFromApi("car")
    let allMotives = await fetchFromApi("motive")

    for (let suspect of allSuspects) {
        suspect.car = allCars.find(i => i.owner == suspect.name);
        if (suspect.car) {
            suspect.car.sighting = await fetchFromApi("sighting/" + "car/" + suspect.car.licenseplate);
        }
        suspect.motive = allMotives.find(i => i.suspectId == suspect.id)?.text;
        suspect.alibi = (await fetchFromApi("alibi/" + suspect.id))[0]?.description;
        suspect.suspiciousness = calculateSuspectSuspiciousness(suspect);
    };
    return allSuspects;
}

function calculateSuspectSuspiciousness(suspect) {
    let suspiciousness = 0;
    if (suspect.motive == undefined) {
        suspiciousness -= 3;
    } else {
        suspiciousness += 5;
    }
    if (suspect.car && suspect.car.sighting[0]) {
        let leaveHourCar = parseInt(suspect.car.sighting[0].endTime.split(":")[0])
        if (!(leaveHourCar <= 01 || leaveHourCar >= 11)) {
            suspiciousness += 50;
        }
    }
    if (suspect.alibi) {
        suspiciousness -= 3;
    } else {
        suspiciousness += 3;
    }
    return suspiciousness;
}

async function fetchFromApi(endpoint) {
    let res;
    await fetch("https://htf-2021.zinderlabs.com/" + endpoint, requestOptions)
        .then(response => response.json())
        .then(result => res = result)
    return res;
}


