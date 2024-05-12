import { Text } from "react-native";

import { CustomTextProps } from "../types/props/CustomTextProps";
import { uniStyles } from "../utils/styles";

export const CustomText = ({ children, style }: CustomTextProps) => {
  return <Text style={[uniStyles.customText, style]}>{children}</Text>;
};
