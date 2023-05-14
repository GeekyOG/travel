import styled from "styled-components";

interface Props {
  readonly image: any;
}

export const Container = styled.div`
  display: flex;
  padding: 0px 100px;
  @media (max-width: 1200px) {
    padding: 0 20px;
  }
`;
export const Right = styled.div`
  padding-top: 30px;
  padding-left: 20px;
  width: 320px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ThumbnailImage = styled.div<Props>`
  background: url(${({ image }) => image}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  z-index: -100;
`;

export const ImageWrapper = styled.div<Props>`
  background: url(${({ image }) => image}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 400px;
  position: relative;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    height: 250px;
  }
`;

export const Left = styled.div`
  padding-top: 30px;
  padding-right: 50px;
  width: 70%;
  border-right: 2px solid #eee;
  @media (max-width: 1200px) {
    width: 100%;
    padding-right: 0;
    border: none;
  }
`;

export const LeftIntro = styled.div``;

export const Heading = styled.h1`
  margin: 30px 0 20px 0;
  font-size: 40px;
  text-align: left;
  color: #000000;
  font-weight: 900;
  line-height: 40px;
  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

export const Name = styled.p`
  font-weight: 800;
`;

export const Tag = styled.p`
  font-weight: 400;
  letter-spacing: 3px;
`;

export const TagContainer = styled.div`
  margin: 50px 0;
  display: block;
`;

export const Button = styled.button`
  background: #eeeeee;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
`;

export const SubHead = styled.h1`
  font-size: 25px;
  font-weight: 900;
`;

export const AboutText = styled.p`
  padding-left: 20px;
  font-size: 14px;
  padding-top: 20px;
  font-weight: 300;
`;

export const ButtonContainer = styled.div`
  padding: 20px 0;
`;

export const FollowButton = styled.button`
  background-color: #fff;
  border: 2px solid #4caf50;
  color: #4caf50;
  border-radius: 15px;
  padding: 6px 20px;
`;

export const MessageButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border-radius: 15px;
  padding: 4px 20px;
  border: none;
  display: flex;
  align-items: center;
`;

export const MoreSection = styled.button`
  position: absolute;
`;

export const Content = styled.div`
  > p {
    font-size: 16px;
    @media (max-width: 1200px) {
      font-size: 14px;
    }
  }
`;
