import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Category, Container, Text } from "./style/style";
import axios from "axios";

function Filter({
  setArticles,
  loading,
  setLoading,
  setError,
}: {
  setArticles: Dispatch<SetStateAction<any[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<boolean>>;
}) {
  const selectCategory = (name: string) => {
    if (process.browser) {
      let i: number;
      let tablinks: HTMLCollectionOf<HTMLElement>;

      tablinks = document.getElementsByClassName(
        "tablink"
      ) as HTMLCollectionOf<HTMLElement>;

      if (name == "All") {
        setLoading(false);
        setError(false);
        axios
          .get(`https://api.wakapadi.io/api/blogs/published`)
          .then((response) => {
            setLoading(true);
            setArticles(response.data);
          });
      } else {
        setLoading(false);
        setError(false);
        axios
          .get(`https://api.wakapadi.io/api/blogs/tag/${name.toLowerCase()}`)
          .then((response) => {
            setLoading(true);
            setArticles(response.data);
          });
      }

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "#000";
      }
      let element = document.querySelector(
        `.${name}`
      ) as unknown as HTMLElement;
      element.style.backgroundColor = "#4CAF50";
      element.style.color = "#fff";
    }
  };

  useEffect(() => {
    if (process.browser) {
      let element = document.querySelector(`.All`) as unknown as HTMLElement;
      element.style.backgroundColor = "#4CAF50";
      element.style.color = "#fff";
    }
  }, []);

  const categories = [
    "All",
    "Life Style",
    "Food",
    "Tourism",
    "Travels",
    "Discovery",
  ];
  return (
    <>
      <Container>
        {categories.map((item) => {
          return (
            <Category
              onClick={() => selectCategory(item.replaceAll(" ", ""))}
              className={`${item.replaceAll(" ", "")} , tablink`}
              key={item}
            >
              <Text>{item}</Text>
            </Category>
          );
        })}
      </Container>
    </>
  );
}

export default Filter;
