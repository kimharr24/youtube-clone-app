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
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_ACCESS_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (searchTerm) => {
  options.params.q = searchTerm;
  const { data } = await axios.request(options);
  
  return data.items;
}
