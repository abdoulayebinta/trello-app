import { ColumnContainer, ColumnTitle } from '../styles';
import { Card } from './Card';

type ColumnProps = {
  title: string;
  children?: React.ReactNode;
};

export const Column = ({ title }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      <Card text="Build React and Typescript app" />
      <Card text="Write unit testins" />
      <Card text="Deploy code on vercel" />
    </ColumnContainer>
  );
};
