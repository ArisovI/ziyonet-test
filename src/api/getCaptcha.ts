import axios from "axios";

export const getCaptcha = async () => {
  const { data } = await axios.get("https://api.ziyonet.uz/api/captcha/flat");
  return data;
};
