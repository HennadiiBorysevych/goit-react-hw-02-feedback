import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 0;
  list-style: none;
`;
export const OptionItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
export const OptionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
