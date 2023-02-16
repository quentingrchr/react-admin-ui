import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary.neutral2};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

export const Select = styled.div`
  padding: 12px 16px;
`;

export const IconWrapper = styled.div<{ isOpen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  transition: transform 0.4s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
export const Placeholder = styled.span`
  color: ${({ theme }) => theme.colors.secondary.neutral4};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]}px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  left: 0;
  padding: 16px 12px;
  box-sizing: border-box;
  justify-content: flex-start;
`;

export const OptionsWrapper = styled.div<{
  top: number;
  maxHeight?: number;
}>`
  position: absolute;
  top: ${({ top }) => top}px;
  width: 100%;
  left: 0;
  max-height: ${({ maxHeight }) =>
    maxHeight !== undefined ? `${maxHeight}px` : "none"};
  overflow: scroll;
  height: 100%;
`;

export const Option = styled.span<{
  selected?: boolean;
}>`
  padding: 8px;
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.body2}px;
  color: ${({ theme }) => theme.colors.primary.black};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.secondary.neutral1 : "transparent"};
  cursor: pointer;
  max-width: 400px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.neutral1};
  }
`;
