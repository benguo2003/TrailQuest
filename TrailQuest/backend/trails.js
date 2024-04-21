import axios from 'axios';

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
      'X-RapidAPI-Key': '7ac0e12b19msh8f8c89cdb0757fep1f969ajsn821a99373cff',
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