import { ColumnContainer, ColumnTitle, CardContainer } from '../styles';

type ColumnProps = {
  title: String;
};

export const Column = ({ title }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      <CardContainer>Generate app scaffold</CardContainer>
      <CardContainer>Learn TypeScript</CardContainer>
      <CardContainer>Begin to use static typing</CardContainer>
    </ColumnContainer>
  );
};
