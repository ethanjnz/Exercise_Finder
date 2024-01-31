export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0831837c37msh0cf50fd4ab5d15dp198632jsn14cff32b8523',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0831837c37msh0cf50fd4ab5d15dp198632jsn14cff32b8523',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}