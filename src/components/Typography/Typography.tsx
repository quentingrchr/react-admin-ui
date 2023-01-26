import React from "react";
import styled from "styled-components";

import { typography } from "../../shared/styles";

const fontSize = {
  h1: typography.size.h1,
  h2: typography.size.h2,
  h3: typography.size.h3,
  h4: typography.size.h4,
  h5: typography.size.h5,
  h6: typography.size.h6,
  s1: typography.size.s1,
  s2: typography.size.s2,
  b1: typography.size.b1,
  b2: typography.size.b2,
  link: typography.size.link,
  bt1: typography.size.bt1,
  bt2: typography.size.bt2,
  cp: typography.size.cp,
  ol: typography.size.ol,
};

const fontWeight = {
  h1: typography.weight.semibold,
  h2: typography.weight.semibold,
  h3: typography.weight.semibold,
  h4: typography.weight.semibold,
  h5: typography.weight.semibold,
  h6: typography.weight.semibold,
  s1: typography.weight.regular,
  s2: typography.weight.medium,
  b1: typography.weight.regular,
  b2: typography.weight.regular,
  link: typography.weight.regular,
  bt1: typography.weight.bold,
  bt2: typography.weight.bold,
  cp: typography.weight.medium,
  ol: typography.weight.regular,
};

type VariantTypes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "s1"
  | "s2"
  | "b1"
  | "b2"
  | "link"
  | "bt1"
  | "bt2"
  | "cp"
  | "ol";

type ComponentTypes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "strong"
  | "p"
  | "span"
  | "div"
  | "a";

export interface IProps {
  /** 적용 스타일 */
  variant: VariantTypes;
  /** HTML 태그 */
  component: ComponentTypes;
  /** 텍스트 */
  children: React.ReactNode;
}

/** `Typograph` 컴포넌트는 모든 텍스트 요소를 다룹니다. */
const Typograph: React.FC<IProps> = ({ variant, component, children }) => {
  return (
    <StyledTag as={component} fontSize={fontSize[variant]} fontWeight={fontWeight[variant]}>
      {children}
    </StyledTag>
  );
};

const StyledTag = styled.div<{ fontSize: number; fontWeight: number }>`
  font-size: ${p => p.fontSize}px;
  font-weight: ${p => p.fontWeight};
`;

export default Typograph;
