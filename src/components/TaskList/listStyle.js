import styled from "styled-components"

export const ListContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 1px;

@media screen and (max-width: 900px) {
  display: flex;
  flex-direction: column;
}
`