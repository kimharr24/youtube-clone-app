import axios from 'axios';

let options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: '',
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '1de50363ecmsh552796d819fb6c7p117751jsnfb0c8d86f58b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (searchTerm) => {
  options.params.q = searchTerm;
  const { data } = await axios.request(options);
  
  return data.items;
}
