import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  img {
    width: 150px;
    border-radius: 50%;
    margin: 20px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  h1 {
    font-size: 32px;
    color: #0d2636;
    margin: 10px 0;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    max-width: 400px;
    text-align: center;
  }
`;

export const BackButton = styled(Link)`
  border: 0;
  outline: 0;
  background: transparent;
  display: flex;
  align-items: center;
  margin-top: 30px;
  text-decoration: none;
  color: #000;

  &:hover {
    opacity: 0.7;
  }
`;

export const IssueList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px;
    border-radius: 6px;
    background: #f8f8f8;
    margin-bottom: 10px;
    transition: all 0.3s;

    &:hover {
      transform: translateX(10px);
      background: #f0f0f0;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #0071db;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #222;
          transition: color 0.3s;

          &:hover {
            color: #0071db;
          }
        }

        span {
          background: #0071db;
          color: #fff;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 8px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 10px;
        font-size: 14px;
        color: #666;
      }
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  button {
    padding: 10px 20px;
    border-radius: 6px;
    border: 0;
    background: #0071db;
    color: #fff;
    transition: all 0.3s;

    &:hover {
      background: #0d2636;
      transform: scale(1.05);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const FilterList = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;

  button {
    padding: 8px 20px;
    border-radius: 6px;
    border: 0;
    background: #000;
    color: #fff;
    transition: all 0.3s;

    &:nth-child(${(props) => props.active + 1}) {
      background: #0071db;
      transform: scale(1.1);
    }

    &:hover {
      filter: brightness(1.2);
      transform: scale(1.05);
    }
  }
`;
