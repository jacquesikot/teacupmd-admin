import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { Input as cInput } from '@chakra-ui/react';

import theme from '../../theme/theme';

const colors = theme.colors;

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 15px 20px;
  border-radius: 12px;
  background-color: ${({ focus, input, error }) =>
    focus ? colors.white : !input ? colors.light : colors.lighBlue};
  display: flex;
  align-items: center;
  border-width: 2px;
  border-color: ${({ focus, input, error }) =>
    error
      ? colors.pink
      : focus
      ? colors.purple
      : input
      ? colors.white
      : colors.white};
`;

export const Placeholder = styled(motion.p)`
  color: ${colors.grey};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.7px;
  position: absolute;
  font-family: 'Inter', sans-serif;
  z-index: 1;
`;

export const Input = styled(cInput)`
  padding-top: 15px;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  color: ${colors.primary};
  font-size: 16px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
`;

export const EyeOpen = styled(FiEye)`
  color: ${colors.grey};
  cursor: pointer;
`;
export const EyeClose = styled(FiEyeOff)`
  color: ${colors.grey};
  cursor: pointer;
`;

export const Check = styled(FiCheck)`
  color: ${colors.green};
`;

export const Error = styled(FiX)`
  color: red;
`;
