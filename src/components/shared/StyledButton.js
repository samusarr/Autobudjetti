import styled from '@emotion/styled';
import { Button } from 'antd';
import { theme } from '../../styles';

export default styled(Button)`
  width: auto;
  min-width: 100px;
  height: 45px;
  padding: 10px 30px;
  background-color: ${theme.colors.primary};
  border: solid 2px ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0 10px 0 10px; 
  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }


`