import axios from "axios";

export const getAudios = async (
  select: string,
  categoryId: string,
  page: number
) => {
  const params: any = {
    page: page,
  };

  if (select !== "") {
    params.show = select;
  }

  if (categoryId !== "") {
    params.category_id = categoryId;
  }

  const { data } = await axios.get(`https://api.ziyonet.uz/api/ru/audio`, {
    params,
  });
  return data;
};

export const getAudiosById = async (id: string) => {
  try {
    const response = await axios.get(
      `https://api.ziyonet.uz/api/ru/audio/${id}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
