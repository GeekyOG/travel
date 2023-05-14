import { Alert, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Category, PostText, TimeText } from "../blog/style/style";
import {
  Container,
  Heading,
  Left,
  Right,
  TagContainer,
  Button,
  SubHead,
  AboutText,
  ButtonContainer,
  FollowButton,
  MessageButton,
  ImageWrapper,
  ThumbnailImage,
  Content,
  Name,
  Tag,
} from "./style/style";
import PostCard from "../postcard";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import LoadingSkeleton from "../skeleton";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function SinglePost({
  data,
  loading,
  id,
  setLoading,
}: {
  data: any;
  loading: boolean;
  id: any;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  dayjs.extend(relativeTime);

  const [trending, setTrending] = useState<any[]>([]);

  const [trendLoading, setTrendLoading] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get(`https://api.wakapadi.io/api/blogs/trending`)
      .then((response) => {
        setTrending(response.data);
        setTrendLoading(true);
      })
      .catch((err) => {
        setError(true);
        setMessage(err.message);
      });

    if (loading) {
      if (process.browser) {
        let output: HTMLBodyElement | any;
        output = document.getElementById("output");

        const content = data.articleContent;

        for (let index = 0; index < content.length; index++) {
          const element = content[index].replace("pre", "p");

          output.innerHTML += element;
        }
      }
    }
  }, [loading, id]);

  return (
    <>
      <Container>
        {error ? (
          <Alert
            style={{ width: "80%", marginTop: 10, padding: 10 }}
            severity="error"
          >
            {message}
          </Alert>
        ) : loading ? (
          <>
            <Left>
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <Grid spacing={2} container alignItems={"center"}>
                    <Grid item>
                      <div>
                        <img
                          width={60}
                          height={60}
                          style={{ borderRadius: "50%" }}
                          alt="Remy Sharp"
                          src="/image/Rectangle 17927.png"
                        />
                      </div>
                    </Grid>
                    <Grid item>
                      <Name>{data.authorName}</Name>
                      <TimeText className="mt-2">
                        <>{dayjs(data.createdAt).fromNow()}</>
                        <span>4min Read</span>
                      </TimeText>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Tag className="mt-3">{data.articleTag}</Tag>
                </Grid>
                <Grid item xs={12}>
                  <Heading>{data.articleTitle}</Heading>
                </Grid>

                <ImageWrapper image={data.thumbnailUrl}></ImageWrapper>

                <div id="output"></div>
              </Grid>

              <TagContainer>
                {/* <Grid container spacing={2}>
              <Grid item>
                <Button>Adventure</Button>
              </Grid>
              <Grid item>
                <Button>Vacation</Button>
              </Grid>
            </Grid>
          </TagContainer>
          <TagContainer>
            <Grid container spacing={2}>
              <Grid item>
                <VolunteerActivismIcon />
                456
              </Grid>
              <Grid item>
                <ChatBubbleOutlineIcon />
                452
              </Grid>
            </Grid> */}
              </TagContainer>

              <SubHead>More From {data.authorName}</SubHead>
              <div className="md:flex overflow-y-scroll scroll">
                {trending.map((item) => (
                  <Grid item key={item._id}>
                    <PostCard data={item} />
                  </Grid>
                ))}
              </div>
            </Left>
          </>
        ) : (
          <Left className="flex justify-center items-center h-screen mt-[-100px]">
            <CircularProgress />
          </Left>
        )}

        <Right>
          {/* <Grid container>
            <Grid item>
              <Grid spacing={2} container alignItems={"center"}>

                <Grid item>
                  <div>
                    <Image
                      width={60}
                      height={60}
                      style={{ borderRadius: "50%" }}
                      alt="Remy Sharp"
                      src="/image/Rectangle 17927.png"
                    />
                  </div>
                </Grid>
                <Grid item>
                  <p>{data.authorName}</p>
                  <TimeText className="mt-2">545 Followers</TimeText>
                </Grid>
                <Grid>
                  <AboutText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita
                  </AboutText>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <ButtonContainer>
            <Grid container spacing={3}>
              <Grid item>
                <FollowButton>Follow</FollowButton>
              </Grid>
              <Grid item>
                <MessageButton>
                  <MapsUgcIcon />
                  Message Me
                </MessageButton>
              </Grid>
            </Grid>
          </ButtonContainer> */}

          <SubHead>More From Wakapadi</SubHead>
          {!trendLoading ? (
            <>
              {Array.from({ length: 2 }, (x, i) => (
                <div className="mt-5" key={i}>
                  <LoadingSkeleton />
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
          {trending.map((item) => (
            <PostCard key={item._id} data={item} />
          ))}
        </Right>
      </Container>
    </>
  );
}

export default SinglePost;
