import styles from "./Footer.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaPhone,
  FaFacebookMessenger,
  FaLocationArrow,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.left}>
            <a href="#">
              <img
                src="https://audio.ziyonet.uz/images/logo/logo-white-ru.svg"
                alt="Логотип"
              />
            </a>

            <div className={styles.rules}>
              <p>
                При использовании материалов сайта ссылка на www.ziyonet.uz
                обязательна
              </p>
              <p>© Все права защищены 2006 - 2024</p>
            </div>

            <ul>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaTelegramPlane />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <ul>
              <li>
                <FaPhone />
                <a href="tel:(998-71)202-22-02">Тел: (998-71) 202-22-02</a>
              </li>

              <li>
                <FaFacebookMessenger />
                <a href="mailto:ziyonet@uzinfocom.uz">ziyonet@uzinfocom.uz</a>
              </li>

              <li>
                <FaLocationArrow />
                <p>Ташкент, 100011 А.Навои, 28Б</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <ul className={styles.lists}>
            <h3>Образование</h3>
            <li>
              <a href="#">Общая информация</a>
            </li>

            <li>
              <a href="#">Дошкольное образование</a>
            </li>

            <li>
              <a href="#">Общее среднее образование</a>
            </li>

            <li>
              <a href="#">Внешкольное образование</a>
            </li>

            <li>
              <a href="#">Среднее специальное, профессиональное образование</a>
            </li>

            <li>
              <a href="#">Высшее образование</a>
            </li>

            <li>
              <a href="#">Послевузовское обучение</a>
            </li>
          </ul>

          <ul className={styles.lists}>
            <h3>Возможности</h3>
            <li>
              <a href="#">Возможности</a>
            </li>
            <li>
              <a href="#">Создание сайтов</a>
            </li>
            <li>
              <a href="#">Хостинг</a>
            </li>
            <li>
              <a href="#">Подключение к сети</a>
            </li>
          </ul>

          <ul className={styles.lists}>
            <h3>Проекты</h3>
            <li>
              <a href="uMail.uz">uMail.uz</a>
            </li>
            <li>
              <a href="Fikr.uz">Fikr.uz</a>
            </li>
            <li>
              <a href="WWW.UZ">WWW.UZ</a>
            </li>
            <li>
              <a href="uTube.uz">uTube.uz</a>
            </li>
            <li>
              <a href="uSport.uz">uSport.uz</a>
            </li>
            <li>
              <a href="Arboblar.uz">Arboblar.uz</a>
            </li>
            <li>
              <a href="B-b.uz">B-b.uz</a>
            </li>
            <li>
              <a href="Lang.uz">Lang.uz</a>
            </li>
            <li>
              <a href="Diktant.uz">Diktant.uz</a>
            </li>
            <li>
              <a href="Meros.uz">Meros.uz</a>
            </li>
            <li>
              <a href="Tanlov.uz">Tanlov.uz</a>
            </li>
            <li>
              <a href="Chakchak.uz">Chakchak.uz</a>
            </li>
          </ul>

          <ul className={styles["lists-social"]}>
            <li>
              <FaPhone />
              <a href="tel:(998-71)202-22-02">Тел: (998-71) 202-22-02</a>
            </li>

            <li>
              <FaFacebookMessenger />
              <a href="mailto:ziyonet@uzinfocom.uz">ziyonet@uzinfocom.uz</a>
            </li>

            <li>
              <FaLocationArrow />
              <p>Ташкент, 100011 А.Навои, 28Б</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.visitor}>
        <a href="https://www.uz/ru/res/visitor/index?id=1891" target="_blank">
          <img
            src="https://www.uz/plugins/top_rating/count/cnt.png?id=189&r=&pg=https%3A//audio.ziyonet.uz/ru%3Fcategory_id%3D49%26page%3D1%26show%3Dpopular&c=Y&j=N&wh=1920x1080&px=24&js=1.3&col=ffffff&t=777777&p=e7e7e7%22"
            alt="Rating"
          />
        </a>

        <a href="https://uzinfocom.uz/">
          <img
            src="https://audio.ziyonet.uz/images/company-logo.svg"
            alt="UZINFACOM logo"
          />
        </a>
      </div>
    </footer>
  );
};
