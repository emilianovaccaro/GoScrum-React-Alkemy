import styled from "styled-components";


export const Btn = styled.button`{
  display: flex;
  width: 100%;
  background: #161d1c;
  color: #fff;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: 1px solid #161d1c;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  -webkit-appearance: button;
  cursor: pointer;

  &:hover {
    transform: scale(0.98);
    color: #01bf71;
  }

}`