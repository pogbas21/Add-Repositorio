import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 28px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #0d2636;

    svg {
      animation: ${rotate} 2s linear infinite;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  gap: 10px;

  input {
    flex: 1;
    border: 2px solid ${(props) => (props.error ? "#ff0000" : "#ddd")};
    padding: 12px 20px;
    border-radius: 6px;
    font-size: 16px;
    transition: all 0.3s;

    &:focus {
      border-color: #0d2636;
      box-shadow: 0 0 10px rgba(13, 38, 54, 0.1);
    }

    &::placeholder {
      color: ${(props) => (props.error ? "#ff0000" : "#999")};
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    transition: all 0.3s;

    &:hover {
      background: #f5f5f5;
      transform: translateX(10px);
      padding-left: 10px;
    }

    span {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    a {
      color: #0d2636;
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        color: #0071db;
        transform: scale(1.2);
      }
    }
  }
`;

export const DeleteButton = styled.button`
  background: transparent;
  color: #ff0000;
  border: 0;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.3s;

  &:hover {
    background: #ffebeb;
    transform: scale(1.1);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  background: #0d2636;
  border: 0;
  border-radius: 6px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    background: #0071db;
    transform: scale(1.05);
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
