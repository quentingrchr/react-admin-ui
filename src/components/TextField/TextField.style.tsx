import styled from "styled-components";

export const Container = styled.fieldset`
  border: none;
  padding: 0;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.secondary.neutral4};
`;
