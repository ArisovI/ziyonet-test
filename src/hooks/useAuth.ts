import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { reAuthUser } from "../api/auth";
import { TIsUser } from "../types";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [isUser, setIsUser] = useState<TIsUser | null>(null);

  const user = Cookies.get("token");

  const { mutate } = useMutation({
    mutationFn: reAuthUser,
    onSuccess: (data) => {
      setIsUser(data);
    },
  });

  useEffect(() => {
    if (user !== undefined) {
      mutate(user);
    }
  }, [user, mutate]);

  return { isUser };
};
