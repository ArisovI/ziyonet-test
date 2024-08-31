import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import styles from "./CreateBook.module.scss";
import { getAuthors } from "../../api/getAuthors";
import { TAuthors, TCategoryItem, TLangugaes } from "../../types";
import { getLanguages } from "../../api/getLanguages";
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

  const [validation, setValidation] = useState({
    title: false,
    author: false,
    year: false,
    description: false,
    category: false,
    language: false,
    genre: false,
    audioBook: false,
    additionalAudioBook: false,
    coverImage: false,
  });

  if (isAuthorsLoading || isLanguagesLoading || isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: any = new FormData(event.currentTarget);

    const validationState = {
      title: !formData.get("title"),
      author: !formData.get("author"),
      year: !formData.get("year"),
      description: !formData.get("description"),
      category: !formData.get("category"),
      language: !formData.get("language"),
      genre: !formData.get("genre"),
      audioBook: !formData.get("audioBook").name,
      additionalAudioBook: !formData.get("additionalAudioBook").name,
      coverImage: !formData.get("coverImage").name,
    };

    setValidation(validationState);

    const isValid = Object.values(validationState).every((field) => !field);
    if (!isValid) return;

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
          <input name="title" type="text" />
          {validation.title && (
            <span className={styles.error}>Обязательное поле</span>
          )}
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="author">
            Автор <span>*</span>
          </label>
          <select name="author" id="author">
            <option value="" hidden></option>
            {authors.data.map((author: TAuthors, index: number) => (
              <option key={index} value={author.author}>
                {author.author}
              </option>
            ))}
          </select>
          {validation.author && (
            <span className={styles.error}>Обязательное поле</span>
          )}
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="year">
            Год издания <span>*</span>
          </label>
          <input name="year" type="text" />
          {validation.year && (
            <span className={styles.error}>Обязательное поле</span>
          )}
        </div>

        <div>
          <label htmlFor="description">
            Описание <span>*</span>
          </label>
          <textarea name="description" rows={3}></textarea>
          {validation.description && (
            <span className={styles.error}>Обязательное поле</span>
          )}
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="category">
            Категория <span>*</span>
          </label>
          <select name="category" id="category">
            <option value="" hidden></option>
            {categories.data.map((category: TCategoryItem) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {validation.category && (
            <span className={styles.error}>Обязательное поле</span>
          )}
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="language">
            Языки <span>*</span>
          </label>
          <select name="language" id="language">
            <option value="" hidden></option>
            {languages.data.map((language: TLangugaes) => (
              <option key={language.id} value={language.name}>
                {language.name}
              </option>
            ))}
          </select>
          {validation.language && (
            <span className={styles.error}>Обязательное поле</span>
          )}
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="genre">
            Жанр <span>*</span>
          </label>
          <select name="genre" id="genre">
            <option value="" hidden></option>
            <option value="Blues">Blues</option>
          </select>
          {validation.genre && (
            <span className={styles.error}>Обязательное поле</span>
          )}
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="audioBook">
            Загрузите аудиокнигу <span>*</span>
          </label>
          <input name="audioBook" type="file" />
          {validation.audioBook && (
            <span className={styles.error}>Обязательное поле</span>
          )}
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="additionalAudioBook">
            Загрузите дополнительную аудиокнигу <span>*</span>
          </label>
          <input name="additionalAudioBook" type="file" />
          {validation.additionalAudioBook && (
            <span className={styles.error}>Обязательное поле</span>
          )}
        </div>

        <div className={styles["create-seconds"]}>
          <label htmlFor="coverImage">
            Обложка аудиокниги <span>*</span>
          </label>
          <input name="coverImage" type="file" />
          {validation.coverImage && (
            <span className={styles.error}>Обязательное поле</span>
          )}
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
