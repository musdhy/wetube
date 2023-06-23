import axios from "axios";

const Base_Url = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: Base_Url,
  params: {
    maxResults: "50",
  },
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "a12869b239msh49674026761210cp14874fjsn7ae69837b752",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${Base_Url}/${url}`, options);
  return data;
};
