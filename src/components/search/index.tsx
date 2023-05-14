import React, { Dispatch, SetStateAction, useState } from "react";
import { Container, ButtonContainer, Button, Left, Right } from "./style/style";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import axios from "axios";

function Search({
  grid,
  setGrid,
  setArticles,
  setLoading,
}: {
  grid: Boolean;
  setGrid: Dispatch<SetStateAction<boolean>>;
  setArticles: Dispatch<SetStateAction<any[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) {
  const [value, setValue] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(false);
    axios
      .get(`https://api.wakapadi.io/api/blogs/search/${value}`)
      .then((response) => {
        setLoading(true);
        setArticles(response.data);
      });
  };

  return (
    <Container className="md:px-[20px] lg:px-[100px]">
      <Left>
        <ButtonContainer>
          <SearchIcon />
          <form onSubmit={handleSubmit}>
            <input
              placeholder="search"
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        </ButtonContainer>
      </Left>
      <Right>
        <Image
          src="/image/grid.svg"
          width={25}
          height={25}
          className="mr-3"
          alt=" "
          onClick={() => setGrid(true)}
        />
        <AppsIcon onClick={() => setGrid(false)} />
      </Right>
    </Container>
  );
}

export default Search;
