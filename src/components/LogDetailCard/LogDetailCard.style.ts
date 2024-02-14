import styled from "styled-components";

interface LogDetailCardThumbnailProps {
  thumbnail: string;
}

interface LogDetailCardInfoProps {
  isSettingLayout: boolean;
}

export const LogDetailCardContainer = styled.div`
  display: flex;
  width: 300px;
  height: 120px;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
`;

export const LogDetailCardThumbnail = styled.div<LogDetailCardThumbnailProps>`
  width: 120px;
  height: 120px;
  background-image: ${(props) => `url(${props.thumbnail})`};
  background-position: center;
  background-size: cover;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const LogDetailCardInfo = styled.div<LogDetailCardInfoProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 120px);
  padding: 18px 10px 10px;

  .infoTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      width: ${(props) => (props.isSettingLayout ? "calc(100% - 15px)" : "100%")};
      font-size: 16px;
      font-weight: bold;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    svg {
      width: 10px;
      cursor: pointer;
      transition: background 0.2s;
      &:hover {
        background-color: #eee;
        border-radius: 50%;
      }
    }
  }

  p {
    margin: 10px 0;
    font-size: 10px;
    line-height: 14px;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .infoContent {
    display: flex;
    justify-content: space-between;
    color: #a3a3a3;
    ul.walkInfo {
      display: flex;
      align-items: center;
      li {
        font-size: 8px;
      }
      li:not(:first-child) {
        position: relative;
        margin-left: 5px;
        &::before {
          position: absolute;
          left: -3.5px;
          top: 50%;
          transform: translateY(-50%);
          content: "";
          display: inline-block;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background-color: #a3a3a3;
        }
      }
    }

    .likeInfo {
      display: flex;
      font-size: 8px;
      svg {
        margin-right: 2px;
      }
      &:hover,
      &.liked {
        svg {
          stroke: orange;
        }
        .like {
          color: orange;
        }
      }
    }
  }
`;

export const LogDetailCardSettingModal = styled.div`
  position: absolute;
  top: 18px;
  right: 10px;
  content: "";
  width: 110px;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  ul {
    li {
      text-align: center;
      font-size: 12px;
      transition: background 0.2s;
      &:hover {
        background-color: #eee;
      }
    }

    li button {
      display: block;
      width: 100%;
      padding: 10px 0;
    }
  }
`;
