import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Props {
  readonly image: any;
}

export const Container = styled.div`
  border-top: 2px #eee solid;
  display: flex;
  @media (max-width: 700px) {
    border-top: none;
    padding: 0 20px;
  }
`;

export const PostContainer = styled.div`
  width: 70%;
  border-right: #00000029 solid 1px;

  @media (max-width: 1200px) {
    width: 100%;
    border: none;
  }
`;

export const Post = styled.div`
  width: 100%;
  border-radius: 25px;
  box-shadow: #00000029 0 0 5px;
  border: #00000029 solid 1px;
  padding-bottom: 20px;
`;
export const ThumbnailImage = styled.div<Props>`
  background: url(${({ image }) => image}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  z-index: -100;
`;

export const ThumbImg = styled.div<Props>`
  background: url(${({ image }) => image}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
  z-index: -100;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: -40px auto 0;
`;
export const Name = styled.p`
  margin-left: 15px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;
export const Title = styled.h3`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 900;
`;

export const Category = styled.p`
  font-size: 14px;
  color: #000;
  letter-spacing: 2px;
`;
export const TimeText = styled.p`
  font-size: 14px;
  color: #9e9e9e;
`;

export const PostText = styled.p`
  font-size: 16px;
  color: #9e9e9e;
  margin: 20px 0;
`;

export const TextWrapper = styled.div`
  background: #fff;
  width: 100%;
  margin-left: -8px;
  border-top-right-radius: 15px;
`;

export const PostContent = styled.div`
  padding: 0 15px;
`;

export const PostIntro = styled.div`
  background: #fff;
  width: 100%;
  margin-left: -8px;
  border-top-right-radius: 15px;
`;
export const ButtonText = styled.p`
  color: #1a76d2;
  font-size: 16px;
`;

export const GridContainer = styled.div`
  width: 100%;
  border-radius: 25px;
  box-shadow: #00000029 0 0 5px;
  border: #eee 1px solid;
  position: relative;

  /* >div>img{
    border-top-right-radius:  25px;
    border-top-left-radius:  25px;
    z-index: -1000;
    } */
`;

export const SkeletonWrapper = styled.div`
  width: 100%;
  border-radius: 25px;
  box-shadow: #00000029 0 0 6px;
  border: #00000029 solid 1px;
  padding-bottom: 50px;
`;

export const ButtonArrow = styled(ArrowForwardIcon)`
  margin-left: 10px;
  font-size: 22px;
`;
