import axios from "axios";

export const getLanguages = async () => {
  const { data } = await axios.get(
    "https://api.ziyonet.uz/api/ru/audio/languages"
  );
  return data;
};
