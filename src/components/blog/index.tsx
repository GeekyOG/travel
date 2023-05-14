import Link from "next/link";
import {
  Container,
  PostContainer,
  Post,
  Info,
  TextWrapper,
  PostContent,
  Name,
  Category,
  PostText,
  TimeText,
  Title,
  ButtonText,
  GridContainer,
  ThumbnailImage,
  ThumbImg,
  ButtonArrow,
} from "./style/style";
import Filter from "../filter";
import Grid from "@mui/material/Grid";
import Trending from "../trending";
import Button from "@mui/material/Button";
import { Dispatch, SetStateAction } from "react";
import LoadingSkeleton from "../skeleton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Alert } from "@mui/material";

dayjs.extend(relativeTime);

function Blog({
  data,
  trending,
  setArticles,
  loading,
  setLoading,
  trendLoading,
  setTrendLoading,
  grid,
  error,
  setError,
  message,
}: {
  data: any[];
  trending: any[];
  setArticles: Dispatch<SetStateAction<any[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  trendLoading: boolean;
  setTrendLoading: Dispatch<SetStateAction<boolean>>;
  grid: boolean;
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
  message: string;
}) {
  return (
    <>
      <Container className="md:px-[20px] lg:px-[100px]">
        <PostContainer>
          <Filter
            setArticles={setArticles}
            loading={loading}
            setLoading={setLoading}
            setError={setError}
          />
          <div className="overflow-y-scroll scroll h-screen">
            <Grid container spacing={2}>
              {error ? (
                <Alert className="ml-[20px] p-5 w-[80%]" severity="error">
                  {message}
                </Alert>
              ) : !loading ? (
                <>
                  {Array.from({ length: 4 }, (x, i) => (
                    <LoadingSkeleton key={i} />
                  ))}
                </>
              ) : (
                <>
                  {data.length > 0 ? (
                    data.map((item) => (
                      <>
                        {!grid ? (
                          <ListView item={item} key={item._id} />
                        ) : (
                          <GridView item={item} />
                        )}
                      </>
                    ))
                  ) : (
                    <Alert
                      style={{
                        width: "80%",
                        marginTop: 10,
                        padding: 10,
                        marginLeft: 10,
                      }}
                      severity="info"
                    >
                      Coming Soon!!!
                    </Alert>
                  )}
                </>
              )}
            </Grid>
          </div>
        </PostContainer>
        <Trending
          trending={trending}
          setTrendLoading={setTrendLoading}
          trendLoading={trendLoading}
        />
      </Container>
    </>
  );
}

const GridView = ({ item }: { item: any }) => {
  return (
    <Grid key={item._id} item xs={12} lg={10} md={12}>
      <GridContainer>
        <div className="flex pr-[10px]">
          <Grid item xs={6}>
            <ThumbImg
              image={item.thumbnailUrl}
              style={{ width: "95%", height: 333, position: "relative" }}
            ></ThumbImg>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid item>
                <div className="flex justify-items-center	justify-center items-center">
                  <img
                    width={60}
                    height={60}
                    style={{ border: "solid 8px #fff", borderRadius: "50%" }}
                    alt="Remy Sharp"
                    src="/image/Rectangle 17927.png"
                  />

                  <Name>{item.authorName}</Name>
                </div>
              </Grid>

              <Grid item md={6}>
                <TimeText className="text-right">
                  {dayjs(item.createdAt).fromNow()}
                </TimeText>
              </Grid>
              <Grid item xs={12}>
                <Grid item>
                  <Category>{item.articleTag}</Category>
                  <Title className="pt-[20px]">
                    {item.articleTitle.slice(0, 50)}...
                  </Title>
                </Grid>
                <Grid item xs={12}>
                  <PostText>{item.description.slice(0, 120)}...</PostText>
                </Grid>
                <Grid item xs={12}>
                  <Link href={`/post/${item._id}`}>
                    <Button className="absolute bottom-5">
                      Continue Reading <ButtonArrow />
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </GridContainer>
    </Grid>
  );
};

const ListView = ({ item }: { item: any }) => {
  return (
    <Grid key={item._id} item xs={12} lg={5} md={6}>
      <Post>
        <ThumbnailImage
          image={item.thumbnailUrl}
          style={{ width: "100%", height: 183, position: "relative" }}
        >
          {/* <img
            alt=""
            src={item.thumbnailUrl}
            style={{ position: "absolute", width: "100%", height: 180 }}
          /> */}
        </ThumbnailImage>
        <Info>
          <div>
            <img
              width={60}
              height={60}
              style={{ border: "solid 8px #fff", borderRadius: "50%" }}
              alt="Remy Sharp"
              src="/image/Rectangle 17927.png"
            />
          </div>
          <TextWrapper>
            <Name>{item.authorName}</Name>
          </TextWrapper>
        </Info>
        <PostContent>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <Category>{item.articleTag}</Category>
            </Grid>

            <Grid item md={4}>
              <TimeText className="text-right">
                {dayjs(item.createdAt).fromNow()}
              </TimeText>
            </Grid>
            <Grid item xs={12}>
              <Title>{item.articleTitle.slice(0, 50)}...</Title>
            </Grid>
            <Grid item xs={12}>
              <PostText>{item.description.slice(0, 120)}...</PostText>
            </Grid>
            <Grid item xs={12}>
              <Link href={`/post/${item._id}`}>
                <Button>
                  <ButtonText> Continue Reading</ButtonText>
                  <ButtonArrow />
                </Button>
              </Link>
            </Grid>
          </Grid>
        </PostContent>
      </Post>
    </Grid>
  );
};
export default Blog;
