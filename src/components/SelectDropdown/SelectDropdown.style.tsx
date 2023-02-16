import styled, { css } from "styled-components";
import Typography from "../Typography";

export const Container = styled.div`
  position: relative;
  width: 300px;
`;

const textOverflow = css`
  max-width: 400px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Select = styled.div`
  padding: 12px 16px;
  position: relative;
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.colors.secondary.neutral2};
  background-color: ${({ theme }) => theme.colors.primary.white};
  border-radius: 8px;
  cursor: pointer;
`;

export const IconWrapper = styled.div<{ isOpen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  transition: transform 0.4s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const Input = styled.div`
  color: ${({ theme }) => theme.colors.secondary.neutral4};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]}px;
  ${textOverflow}
`;

export const Placeholder = styled(Typography)`
  display: block;
  ${textOverflow}
`;

export const OptionsWrapper = styled.div<{
  maxHeight?: number;
}>`
  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  left: 0;
  z-index: 2;
  border: 1px solid ${({ theme }) => theme.colors.secondary.neutral2};
  background-color: ${({ theme }) => theme.colors.primary.white};
  border-radius: 8px;
  max-height: ${({ maxHeight }) =>
    maxHeight !== undefined ? `${maxHeight}px` : "none"};
  overflow: scroll;
`;

export const Options = styled.div<{
  maxHeight?: number;
}>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px 12px;
  box-sizing: border-box;
  justify-content: flex-start;
  width: 100%;
`;

export const Option = styled.span<{
  selected?: boolean;
  light?: boolean;
}>`
  padding: 8px;
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.body1}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.secondary.neutral4 : theme.colors.primary.black};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.secondary.neutral1 : "transparent"};
  cursor: pointer;
  ${textOverflow}

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.neutral1};
  }
`;
