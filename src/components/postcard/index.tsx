import React from "react";
import {
  Container,
  Heading,
  PostHeading,
  PostImage,
  PostText,
  PostTime,
  SideImage,
  TrendingCard,
  TrendPostMiddle,
  Name,
  PostTag,
  ReadButton,
} from "./style/style";
import Grid from "@mui/material/Grid";
import Filter from "../filter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ButtonArrow } from "../blog/style/style";

function PostCard({ data }: { data: any }) {
  dayjs.extend(relativeTime);

  return (
    <Container>
      <TrendingCard>
        <Grid container spacing={2}>
          <Grid item xs={4} lg={4} md={4}>
            <SideImage>
              <img alt="" src={data.thumbnailUrl} />
            </SideImage>
          </Grid>
          <Grid item xs={8} lg={8} md={8}>
            <Grid container spacing={0} justifyContent={"center"}>
              <Grid item xs={6}>
                <PostTag>{data.articleTag}</PostTag>
              </Grid>
              <Grid item xs={6}>
                <PostTime className="text-right">
                  {dayjs(data.createdAt).fromNow()}
                </PostTime>
              </Grid>
              <TrendPostMiddle container alignItems={"center"} spacing={1}>
                <Grid item>
                  <img
                    alt=""
                    style={{ borderRadius: "50%" }}
                    src="/image/Rectangle 17927.png"
                    width={30}
                    height={30}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Name>{data.authorName}</Name>
                </Grid>
              </TrendPostMiddle>

              <Grid item xs={12}>
                <PostHeading>{data.articleTitle.slice(0, 40)}...</PostHeading>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <PostText>{data.description.slice(0, 130)}...</PostText>
            <Link href={`/post/${data._id}`}>
              <ReadButton>
                Continue Reading <ButtonArrow />
              </ReadButton>
            </Link>
          </Grid>
        </Grid>
      </TrendingCard>
    </Container>
  );
}

export default PostCard;
