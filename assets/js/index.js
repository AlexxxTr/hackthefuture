const myHeaders = new Headers();
myHeaders.append('userId', 'nietdevoorlaatste362');

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://htf-2021.zinderlabs.com/suspect", requestOptions)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log('error', err));