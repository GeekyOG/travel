import React, { Dispatch, SetStateAction } from "react";
import { Container, Heading, PostContainer } from "./style/style";
import PostCard from "../postcard";
import LoadingSkeleton from "../skeleton";

function Trending({
  trending,
  setTrendLoading,
  trendLoading,
}: {
  trending: any[];
  setTrendLoading: Dispatch<SetStateAction<boolean>>;
  trendLoading: boolean;
}) {
  return (
    <Container>
      <Heading className="pb-5 pt-[10px]">Trending on wakapadi</Heading>

      {!trendLoading ? (
        <>
          {Array.from({ length: 2 }, (x, i) => (
            <div className="mt-5" key={i}>
              <LoadingSkeleton />
            </div>
          ))}
        </>
      ) : (
        <PostContainer>
          {trending.map((item) => (
            <div key={item._id}>
              <PostCard data={item} />
            </div>
          ))}
        </PostContainer>
      )}

      {/* <Heading className="mt-50">Recommeded Topics</Heading> */}
      {/* <Filter/> */}
    </Container>
  );
}

export default Trending;
