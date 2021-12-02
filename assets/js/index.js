const myHeaders = new Headers();
myHeaders.append('userId', 'filling this in later');

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://htf-2021.zinderlabs.com/uri", requestOptions)
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(err => console.log('error', err));