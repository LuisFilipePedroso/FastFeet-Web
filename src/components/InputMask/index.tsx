import React, { useRef, useEffect, useState } from 'react';
import ReactInputMask, { Props } from 'react-input-mask';
import { useField } from '@unform/core';

interface IProps extends Props {
  name: string;
  label: string;
}

const InputMask: React.FC<IProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [value, setValue] = useState();

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        // console.log(value);
        // ref.setInputValue('');
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <ReactInputMask
        ref={inputRef}
        value={value}
        onChange={handleChange}
        {...rest}
      />

      {error && <span style={{ color: '#f00' }}>{error}</span>}
    </>
  );
};

export default InputMask;
