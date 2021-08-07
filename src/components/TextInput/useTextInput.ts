import react, { useState, useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const useTextInput = (id: string) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const iconSize = 24;
  const controls = useAnimation();

  useEffect(() => {
    const input =
      typeof window !== 'undefined' &&
      <HTMLInputElement>document.getElementById(id);

    setValue(input.value);

    input.addEventListener('input', (e) => {
      setValue(input.value);
      controls.start({
        y: -14,
        transition: {
          duration: 0.2,
        },
      });
    });
    input.addEventListener('paste', (e) => {
      setValue(input.value);
    });
  }, [
    typeof window !== 'undefined' &&
      <HTMLInputElement>document.getElementById(id),
  ]);

  const handleSelect = () => {
    setFocus(true);
    document.getElementById(id).focus();
    controls.start({
      y: -14,
      transition: {
        duration: 0.2,
      },
    });
  };

  const handleOnBlur = () => {
    setFocus(false);
    if (value) return;
    controls.start({
      y: 0,
      transition: {
        duration: 0.2,
      },
    });
  };

  const handleEyeClick = () => {
    const input = document.getElementById('password');

    if (visible) {
      setVisible(!visible);
      input.setAttribute('type', 'password');
    } else {
      setVisible(!visible);
      input.setAttribute('type', 'text');
    }
  };

  return {
    handleSelect,
    handleOnBlur,
    controls,
    focus,
    visible,
    iconSize,
    handleEyeClick,
    value,
  };
};

export default useTextInput;
