import { useQuery } from "@tanstack/react-query";
import styles from "./CreateBook.module.scss";
import { getAuthors } from "../../api/getAuthors";
import { getLanguages } from "../../api/getLanguages";
import { TAuthors, TCategoryItem, TLangugaes } from "../../types";
import { getCategories } from "../../api/getCategories";

export const CreateBook = () => {
  const { data: authors, isLoading: isAuthorsLoading } = useQuery({
    queryKey: ["authors"],
    queryFn: getAuthors,
  });

  const { data: languages, isLoading: isLanguagesLoading } = useQuery({
    queryKey: ["languages"],
    queryFn: getLanguages,
  });

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isAuthorsLoading || isLanguagesLoading || isCategoriesLoading) {
    return <div>loading</div>;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      title: formData.get("title"),
      author: formData.get("author"),
      year: formData.get("year"),
      description: formData.get("description"),
      category: formData.get("category"),
      language: formData.get("language"),
      genre: formData.get("genre"),
      audioBook: formData.get("audioBook"),
      additionalAudioBook: formData.get("additionalAudioBook"),
      coverImage: formData.get("coverImage"),
    };
    console.log(data);
  };

  return (
    <div className={styles.create}>
      <h3>Добавить аудиокнигу</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            Заголовок <span>*</span>
          </label>
          <input name="title" required type="text" />
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="author">
            Автор <span>*</span>
          </label>
          <select name="author" required id="author">
            <option value="" hidden></option>
            {authors.data.map((author: TAuthors, index: number) => (
              <option key={index} value={author.author}>
                {author.author}
              </option>
            ))}
          </select>
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="year">
            Год издания <span>*</span>
          </label>
          <input name="year" required type="text" />
        </div>

        <div>
          <label htmlFor="description">
            Описание <span>*</span>
          </label>
          <textarea name="description" required rows={3}></textarea>
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="category">
            Категория <span>*</span>
          </label>
          <select name="category" required id="category">
            <option value="" hidden></option>
            {categories.data.map((category: TCategoryItem) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="language">
            Языки <span>*</span>
          </label>
          <select name="language" required id="language">
            <option value="" hidden></option>
            {languages.data.map((language: TLangugaes) => (
              <option key={language.id} value={language.name}>
                {language.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="genre">
            Жанр <span>*</span>
          </label>
          <select name="genre" required id="genre">
            <option value="" hidden></option>
            <option value="Blues">Blues</option>
          </select>
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="audioBook">
            Загрузите аудиокнигу <span>*</span>
          </label>
          <input name="audioBook" required type="file" />
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="additionalAudioBook">
            Загрузите дополнительную аудиокнигу <span>*</span>
          </label>
          <input name="additionalAudioBook" required type="file" />
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="coverImage">
            Обложка аудиокниги <span>*</span>
          </label>
          <input name="coverImage" required type="file" />
        </div>

        <div>
          <button type="submit">
            <span>+</span> <p>Добавить аудиокнигу</p>
          </button>
        </div>
      </form>
    </div>
  );
};
