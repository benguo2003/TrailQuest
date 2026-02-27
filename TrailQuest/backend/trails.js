import axios from 'axios';
import { RAPIDAPI_KEY } from '@env';

export const fetchData = async () => {
  const options = {
    method: 'GET',
    url: 'https://trailapi-trailapi.p.rapidapi.com/activity/',
    params: {
      lat: '33.93',
      limit: '25',
      lon: '-118.398',
      radius: '25',
      'q-activities_activity_type_name_eq': 'hiking'
    },
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};