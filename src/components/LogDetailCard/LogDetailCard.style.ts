import styled from "styled-components";

interface LogDetailCardThumbnailProps {
  thumbnailURL: string;
}

interface LogDetailCardInfoProps {
  isSettingLayout: boolean;
}

export const LogDetailCardContainer = styled.div`
  display: flex;
  width: 30rem;
  height: 12rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.white};
  cursor: pointer;
`;

export const LogDetailCardThumbnail = styled.div<LogDetailCardThumbnailProps>`
  width: 12rem;
  height: 12rem;
  background-image: ${(props) => `url(${props.thumbnailURL})`};
  background-position: center;
  background-size: cover;
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
`;

export const LogDetailCardInfo = styled.div<LogDetailCardInfoProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 12rem);
  padding: 1.8rem 1rem 1rem;

  .infoTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      width: ${(props) => (props.isSettingLayout ? "calc(100% - 15px)" : "100%")};
      font-size: 1.6rem;
      font-weight: 700;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    svg {
      width: 1rem;
      cursor: pointer;
      transition: background 0.2s;
      &:hover {
        background-color: ${(props) => props.theme.gray_100};
        border-radius: 50%;
      }
    }
  }

  p {
    margin: 1rem 0;
    font-size: 1.2rem;
    line-height: 1.6rem;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .infoContent {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.gray_500};
    ul.walkInfo {
      display: flex;
      align-items: center;
      li {
        font-size: 0.8rem;
      }
      li:not(:first-child) {
        position: relative;
        margin-left: 0.5rem;
        &::before {
          position: absolute;
          left: -0.35rem;
          top: 50%;
          transform: translateY(-50%);
          content: "";
          display: inline-block;
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          background-color: ${(props) => props.theme.gray_500};
        }
      }
    }

    .likeInfo {
      display: flex;
      font-size: 0.8rem;
      svg {
        margin-right: 0.2rem;
      }
      &:hover,
      &.liked {
        svg {
          stroke: ${(props) => props.theme.yellow_500};
        }
        .like {
          color: ${(props) => props.theme.yellow_500};
        }
      }
    }
  }
`;

export const LogDetailCardSettingModal = styled.div`
  position: absolute;
  top: 1.8rem;
  right: 1rem;
  content: "";
  width: 11rem;
  background-color: ${(props) => props.theme.white};
  box-shadow: rgba(99, 99, 99, 0.2) 0rem 0.2rem 0.8rem 0rem;
  ul {
    li {
      text-align: center;
      font-size: 1.2rem;
      transition: background 0.2s;
      &:hover {
        background-color: ${(props) => props.theme.gray_100};
      }
    }

    li button {
      display: block;
      width: 100%;
      padding: 1rem 0;
    }
  }
`;
