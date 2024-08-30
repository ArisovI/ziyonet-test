import { FaEye } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaNfcSymbol } from "react-icons/fa6";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCaptcha } from "../../api/getCaptcha";
import { authUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import styles from "./Login.module.scss";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery({
    queryFn: () => getCaptcha(),
    queryKey: ["captcha"],
  });

  const {
    mutate,
    data: user,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: authUser,
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const formElements = event.currentTarget;
    const login = `${formElements.login.value}${formElements.emailDomain.value}`;
    const password = formElements.password.value;
    const captcha = formElements.captcha.value;
    const key = data.key;

    const formData = {
      login,
      password,
      captcha,
      key,
    };

    mutate(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      Cookies.set("token", user.token);
    }
  }, [isSuccess]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.login}>
      <h3>Авторизация</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-item"]}>
          <label htmlFor="login">
            Логин <span>*</span>
          </label>
          <input id="login" name="login" type="text" />
          <select id="emailDomain" name="emailDomain">
            <option value="@umail.uz">@umail.uz</option>
            <option value="@id.uz">@id.uz</option>
          </select>
        </div>

        <div className={styles["form-item"]}>
          <label htmlFor="password">
            Пароль <span>*</span>
          </label>
          <input
            id="password"
            name="password"
            required
            type={showPassword ? "text" : "password"}
          />
          <button type="button" onClick={handleShowPassword}>
            <FaEye />
          </button>
        </div>

        <div className={styles["form-recaptcha"]}>
          <img src={data.img} alt="Recaptcha picture" />
          <button type="button" onClick={() => refetch()}>
            <FaNfcSymbol />
          </button>
        </div>

        <div className={styles["form-item"]}>
          <label htmlFor="code">
            Код проверки <span>*</span>
          </label>
          <input id="code" name="captcha" type="text" required />
          {isError === true ? <span>Просрочен срок действия капчи</span> : ""}
        </div>

        <button type="submit" className={styles["form-enter"]}>
          Войти
        </button>

        <div className={styles["form-btns"]}>
          <a href="">Зарегистрироваться</a>
          <a href="">Восстановление пароля</a>
        </div>
      </form>
    </div>
  );
};
