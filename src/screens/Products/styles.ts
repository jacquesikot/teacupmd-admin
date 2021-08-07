import styled from 'styled-components';

import theme from '../../theme/theme';

const colors = theme.colors;

export const Container = styled.div`
  padding: 30px 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 32px;
  color: ${colors.primary};
  width: 70%;
  font-weight: 500;
  line-height: 40px;
`;

export const FormContainer = styled.form`
  padding: 30px 0px;
  width: 60vw;
  height: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
