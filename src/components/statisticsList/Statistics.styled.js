import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
  text-align: center;
`;
export const StatisticsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  &:not(:last-child) {
    border-right: 1px solid #000;
  }
`;
