import styled from "styled-components/native";

export const DrinkContainer = styled.TouchableOpacity`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 50px;
`;

export const DrinkDetails = styled.View`
  margin-left: 15px;
  flex: 1;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(204, 204, 204, 0.3);
  margin: 24px 0;
`;
