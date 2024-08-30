import axios from "axios";

export const getAuthors = async () => {
  const { data } = await axios.get(
    "https://api.ziyonet.uz/api/ru/audio/authors"
  );
  return data;
};
