import styled, { css } from "styled-components";
import { IProps } from "./InputFile.component";

export const Content = styled.span`
  color: ${({ theme }) => theme.colors.primary.brand};
  position: relative;
  &:hover {
    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary.brand};
      cursor: pointer;
    }
  }
`;

export const MainText = styled.div`
  display: inline-block;
`;

export const Container = styled.div<{ disabled: IProps["disabled"] }>`
  display: flex;
  border: 1px dashed ${({ theme }) => theme.colors.secondary.neutral2};
  width: 100%;
  max-width: 400px;
  height: fit-content;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary.neutral4};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  box-sizing: border-box;
  width: 100%;
  ${Content} {
    &:hover {
      &:after {
        display: ${({ disabled }) => (disabled ? "none" : "block")};
      }
    }
  }
`;
