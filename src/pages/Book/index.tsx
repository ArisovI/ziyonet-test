import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAudiosById } from "../../api/getAudios";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { Stars } from "../../components/Stars";
import { Music } from "../../components/Music";
import { AiFillBook } from "react-icons/ai";
import styles from "./Book.module.scss";

export const Book = () => {
  const { id } = useParams();

  if (id !== undefined) {
    const { data, isLoading } = useQuery({
      queryFn: () => getAudiosById(id),
      queryKey: ["audios"],
    });

    if (isLoading) {
      return <div>loading...</div>;
    }

    return (
      <div className={styles.book}>
        <div className={styles.top}>
          <h2>
            <AiFillBook />
            Аудиокниги
          </h2>
        </div>

        <div className={styles.bottom}>
          <div className={styles["book-item"]}>
            <div className={styles["book-item__top"]}>
              <img src={data.data.cover} alt="" />
              <div>
                <div className={styles.btns}>
                  <button>
                    <FaRegThumbsDown />
                  </button>
                  <button>
                    <FaRegThumbsUp />
                  </button>
                </div>

                <div className={styles.stars}>
                  <Stars rating={data.data.rating} />
                  <span>{data.data.rating}</span>
                </div>
              </div>
            </div>

            <div className={styles["book-item__bottom"]}>
              <h3>{data.data.title}</h3>
              <Music url={`https://api.ziyonet.uz/api/ru/audio/stream/${id}`} />
              <ul className={styles.info}>
                <li>
                  <p>Тип</p>
                  <a href="#">{data.data.category.name}</a>
                </li>

                <li>
                  <p>Язык</p>
                  <a href="#">{data.data.language.name}</a>
                </li>

                <li>
                  <p>Жанр</p>
                  <a href="#">{data.data.genre.name}</a>
                </li>

                <li>
                  <p>Год</p>
                  <a href="#">{data.data.year}</a>
                </li>

                <li>Разрмер 128kbit/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
