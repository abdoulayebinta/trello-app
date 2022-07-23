import { ColumnContainer, ColumnTitle } from '../styles';
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';
import { useAppState } from '../state/AppStateContext';

type ColumnProps = {
  title: string;
  id: string;
};

export const Column = ({ title, id }: ColumnProps) => {
  const { getTasksByListId } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} id={task.id} key={task.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add a card" onAdd={console.log} />
    </ColumnContainer>
  );
};
