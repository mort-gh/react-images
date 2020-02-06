import axios from "axios";

export const fetchImages = async (query, page) => {
  try {
    const data = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=15165132-5d443299b6701a2727677252c&image_type=photo&orientation=horizontal&per_page=12`
    );
    return data.data.hits;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
