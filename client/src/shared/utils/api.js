const BASE_URL = "https://jira-clone-pedja.herokuapp.com/";

function fetchData(path) {
    return fetch(`${BASE_URL}`).then((data) => data.json());
    // return fetch(`${BASE_URL}/${path}`).then((data) => data.json());
}

export default fetchData;
