import React from 'react';
import { AppContainer } from './styles';
import { AddNewItem } from './components/AddNewItem';
import { Column } from './components/Column';

export const App = () => {
  return (
    <AppContainer>
      <Column title="TO DO" />
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
