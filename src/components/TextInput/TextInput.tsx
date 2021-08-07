import React from 'react';
import {
  Container,
  Placeholder,
  Input,
  EyeOpen,
  EyeClose,
  Check,
  Error,
} from './styles';
import useTextInput from './useTextInput';

interface Props {
  placeholder: string;
  id: string;
  type: string;
  error?: boolean;
  onChange?: any;
  touched: boolean;
}

const TextInput = ({
  placeholder,
  id,
  type,
  error,
  onChange,
  touched,
  ...props
}: Props) => {
  const {
    handleOnBlur,
    handleSelect,
    controls,
    focus,
    visible,
    handleEyeClick,
    iconSize,
    value,
  } = useTextInput(id);

  const returnEye = () =>
    visible ? (
      <EyeClose size={iconSize} onClick={handleEyeClick} />
    ) : (
      <EyeOpen size={iconSize} onClick={handleEyeClick} />
    );

  const returnValidation = () =>
    value && (error ? <Error size={iconSize} /> : <Check size={iconSize} />);

  return (
    <Container focus={focus.toString()} input={value} error={error}>
      <Placeholder onClick={handleSelect} animate={controls}>
        {placeholder}
      </Placeholder>
      <Input
        variant="unstyled"
        type={type}
        id={id}
        focus={focus.toString()}
        input={value}
        onSelect={handleSelect}
        onBlur={handleOnBlur}
        onChange={onChange}
        {...props}
      />
      {type === 'password' ? returnEye() : returnValidation()}
    </Container>
  );
};

export default TextInput;
