import styled from "styled-components/native";

export const Image = styled.ImageBackground`
  width: 100%;
  height: 250px;
  align-items: flex-end;
`;

export const Icon = styled.ImageBackground`
  width: 25px;
  height: 25px;
`;

export const ReceitaHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin: 24px;
`;

export const Header = styled.View``;

export const ModalBody = styled.View`
  background: #fafafa;
  flex: 1;
  padding: 32px 24px 0;
`;

export const ReceitaContainer = styled.View`
  margin-top: 32px;
  flex: 1;
`;

export const Item = styled.View`
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;
