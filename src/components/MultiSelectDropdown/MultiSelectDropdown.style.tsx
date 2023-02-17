import styled from "styled-components";
import Typography from "../Typography";

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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Placeholder = styled(Typography)`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const FieldContainer = styled.fieldset<{
  maxWidth?: string;
  minWidth?: string;
}>`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth !== undefined ? maxWidth : "none")};
  min-width: ${({ minWidth }) => (minWidth !== undefined ? minWidth : "none")};

  ${Placeholder} {
    max-width: ${({ maxWidth }) =>
      maxWidth !== undefined ? maxWidth : "none"};
    min-width: ${({ minWidth }) =>
      minWidth !== undefined ? minWidth : "none"};
  }
  ${Input} {
    max-width: ${({ maxWidth }) =>
      maxWidth !== undefined ? maxWidth : "none"};
    min-width: ${({ minWidth }) =>
      minWidth !== undefined ? minWidth : "none"};
  }
`;
export const SelectContainer = styled.div`
  position: relative;
`;
