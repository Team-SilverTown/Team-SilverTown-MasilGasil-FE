import styled from "styled-components";

interface LogSimpleCardProps {
  width: string;
  height: string;
  thumbnail: string;
  radius: string;
}

export const LogSimpleCardContainer = styled.div<LogSimpleCardProps>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  background-image: ${(props) => `url(${props.thumbnail})`};
  background-position: center;
  background-size: cover;
  box-shadow: inset gray 0px -10px 60px -12px;
  cursor: pointer;
`;

export const LogSimpleCardBotton = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5px;

  strong {
    font-size: 8px;
    color: #fff;
  }

  .simplelog-Info {
    position: relative;
    ul {
      position: absolute;
      top: 0;
      display: flex;
      justify-content: flex-end;
      width: 100%;
      li {
        font-size: 6px;
        color: #fff;
      }
      li:first-child {
        position: relative;
        margin-right: 5px;
        &::after {
          position: absolute;
          right: -3.5px;
          top: 50%;
          transform: translateY(-50%);
          content: "";
          display: inline-block;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background-color: #fff;
        }
      }
    }
  }
`;
