import axios from "axios";

const requestOptions = {
    method: 'GET',
    url: 'https://youtube-mp36.p.rapidapi.com/dl',
    params: {},
    headers: {
      'X-RapidAPI-Key': '337838498emshf56de9ac9551e65p16bd8cjsn02d9abeb306d',
      'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
    }
  };

  const fetch = async (id) => {
    requestOptions.params = { id };
    const response = await axios.request(requestOptions);
    return response;
  }

  export { fetch };