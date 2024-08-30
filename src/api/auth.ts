import axios from "axios";

export const authUser = async (user: any) => {
  try {
    const response = await axios.post(
      "https://api.ziyonet.uz/api/ru/login",
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const reAuthUser = async (token: string) => {
  try {
    const response = await axios.get("https://api.ziyonet.uz/api/ru/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
