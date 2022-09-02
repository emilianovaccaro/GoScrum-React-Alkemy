import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  margin: 5px auto;
  padding: 10px 0 10px;
  width: 95%;
  border-radius: 7px;

  background: ${(props) => `linear-gradient(
    45deg, ${props.mainColor}, ${props.secondColor}
  )`};
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 10px 10px 10px;
`

export const CardHeaderStats = styled.span`
  background-color: white;
  padding: 5px auto;
  text-align: left;
  margin-right: 25px;
  flex-direction: column;
`;

export const CardTitle = styled.h1`
  color: #000;
  font-weight: 300;
`;

export const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`

export const CardDescription = styled.p`
  text-align: left;
  margin: auto 10px;
  margin-top: -10px;
  color: #000;
  font-weight: 300;
  width: 80%;
`

export const DivCardButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CardButtons = styled.button`
  margin: 0 5px;
  margin-top: 10px;
  padding: 8px 14px;
  background: teal;
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 4px;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`

