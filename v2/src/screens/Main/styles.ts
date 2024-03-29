import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
  background: #fafafa;
  flex: 1;
`;

export const DrinksContainer = styled.View`
  margin: 24px 0;
  flex: 1;
`;
