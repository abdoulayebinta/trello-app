import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-color: #3179ba;
  padding: 20px;
`;

export const ColumnContainer = styled.div`
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  background-color: #ebecf0;
  border-radius: 3px;
  padding: 8px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;
