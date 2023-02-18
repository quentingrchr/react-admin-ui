import styled from "styled-components";

export const Checkbox = styled.div<{
  checked: boolean;
  hasAction: boolean;
}>`
  border-radius: 4px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  --__icon-size: 12px;
  --__icon-color: ${({ theme }) => theme.colors.primary.white};
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary.brand : theme.colors.secondary.neutral2};
    color: ${({ theme, checked }) =>
      checked ? theme.colors.primary.white : theme.colors.secondary.neutral4};
    border: 1px solid
    border-color: ${({ theme, checked }) =>
      checked ? theme.colors.primary.brand : theme.colors.secondary.neutral2};
      cursor: ${({ hasAction }) => (hasAction ? "pointer" : "default")};
`;

export const Fieldset = styled.fieldset<{
  checked: boolean;
  disabled: boolean;
}>`
  border: none;
  padding: 0;
  margin: 0;
`;
