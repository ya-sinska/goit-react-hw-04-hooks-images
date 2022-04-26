import axios from 'axios';
const KEY = '25289922-76fc98c8dd80f80668ef47aa3';
export const fetchImages = async (name, page = 1, limit = 20) => {
  const params = {
    key: KEY,
    q: name,
    image_type:"photo",
    per_page: limit,
    page: page,
    };
    const response = await axios.get(`https://pixabay.com/api/`, { params });
    return response.data;  
};

