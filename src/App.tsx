import React from 'react';
import { AppContainer } from './styles';
import { AddNewItem } from './components/AddNewItem';
import { Column } from './components/Column';
import { useAppState } from './state/appStateContext';

export const App = () => {
  const { lists } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column title={list.text} id={list.id} key={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
