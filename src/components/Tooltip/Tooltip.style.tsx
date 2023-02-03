import styled from "styled-components";
import { ColorStringInterpolation } from "../../types";

export const Container = styled.div<{
  color: ColorStringInterpolation;
}>`
  margin-top: ${({ theme }) => theme.spacing[7]}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing[7]}px;
  --__icon-color: ${({ theme, color }) =>
    theme.colors[color.split("-")[0]][color.split("-")[1]]};
  --__icon-size: ${({ theme }) => theme.icon.size["x-small"]}px;
  color: ${({ theme, color }) =>
    theme.colors[color.split("-")[0]][color.split("-")[1]]};
`;
