export type TCategoryItem = {
  id: number;
  name: string;
  icon: string;
  source: string;
  total: number;
  childrens: TCategoryItem[];
};

export type TAudiosItem = {
  id: number;
  title: string;
  year: number;
  genre: {
    id: number;
    name: string;
  };
  duration: string;
  rating: number;
  grade: {
    like: false;
    dislike: false;
  };
  language: {
    alias: string;
    name: string;
  };
  cover: string;
  category: {
    id: number;
    name: string;
  };
  author: string;
};

export type TAudios = {
  data: TAudiosItem[];
  status: boolean;
  pagination: {
    page: number;
    records: number;
    total: number;
  };
};

export type TIsUser = {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  full_name: string;
  login: null;
  email: string;
  email_verified_at: null;
  last_online: string;
  image: null;
  work: null;
  education: null;
  created_at: string;
  verification: boolean;
  roles: string;
  permissions: [];
};

export type TAuthors = {
  author: string;
};

export type TLangugaes = {
  id: number;
  name: string;
  alias: string;
};
