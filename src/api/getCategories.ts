import axios from "axios";

export const getCategories = async () => {
  const { data } = await axios.get(
    "https://api.ziyonet.uz/api/ru/audio/categories"
  );
  return data;
};
