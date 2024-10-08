import { Link } from "react-router-dom";
import { TAudiosItem } from "../../types";
import { FaPlay, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import styles from "./AudioItem.module.scss";
import { Stars } from "../Stars";

type AudioItemProps = {
  data: TAudiosItem;
};

export const AudioItem: React.FC<AudioItemProps> = ({ data }) => {
  return (
    <li className={styles["audio-item"]}>
      <div className={styles.top}>
        <div>
          <p>{data.duration}</p>
          <Link to="">
            <FaPlay />
          </Link>
        </div>
        <div>
          <button>
            <FaRegThumbsUp />
          </button>
          <button>
            <FaRegThumbsDown />
          </button>
        </div>
      </div>

      <Link className={styles.cover} to={`/book/${data.id.toString()}`}>
        <img src={data.cover} alt="Картинка альбома" />
      </Link>
      <div className={styles.rating}>
        <Stars rating={data.rating} />
        <span>{data.rating}</span>
      </div>

      <h3 className={styles.title}>{data.title}</h3>
      <div className={styles.genre}>
        <Link className={styles.author} to={""}>
          {data.author}
        </Link>
        <Link className={styles.duration} to={""}>
          {data.duration}
        </Link>
      </div>

      <ul className={styles.info}>
        <li>
          <p>Тип</p>
          <Link to={data.id.toString()}>{data.category.name}</Link>
        </li>

        <li>
          <p>Язык</p>
          <Link to={data.id.toString()}>{data.language.name}</Link>
        </li>

        <li>
          <p>Жанр</p>
          <Link to={data.id.toString()}>{data.genre.name}</Link>
        </li>

        <li>
          <p>Год</p>
          <Link to={data.id.toString()}>{data.year}</Link>
        </li>
      </ul>
    </li>
  );
};
