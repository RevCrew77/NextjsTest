// Styled elements for the Card go here
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => `2px solid ${props.borderColor}`};
  border-radius: 8px;
  border-width: 2px;
  border-color: ${(props) => props.borderColor};
  margin: 10px 0px 10px 0px;
  padding: 10px;
`;
export const VideoImg = styled.img`
  width: 350px;
  height: 600px;
  border-radius: 10px;
`;
