import { ColumnContainer, ColumnTitle } from '../styles';
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';

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
      <AddNewItem toggleButtonText="+ Add a card" onAdd={console.log} />
    </ColumnContainer>
  );
};
