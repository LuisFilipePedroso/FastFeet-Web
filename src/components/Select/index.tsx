import React, { useRef, useEffect, useState } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';

const customStyles = {
  container: (base) => ({
    ...base,
    height: '45px',
  }),
  valueContainer: (base) => ({
    ...base,
    height: '45px',
    color: '#999999',
    fontSize: '16px',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#999999',
    top: '60%',
  }),
  option: (provided, state) => ({
    ...provided,
    color: '#999999',
    fontSize: '16px',
  }),
  control: base => ({
    ...base,
    height: '45px',
    marginTop: '9px',
  }),
};

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  label?: string;
  options: any;
}
const Select: React.FC<Props> = ({ name, label, options, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [selected, setSelected] = useState();

  useEffect(() => {
    setSelected(options?.find((option) => option.value === defaultValue));
  }, [defaultValue, options]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'props.value',
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.props.value) {
            return [];
          }
          return ref.props.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.props.value) {
          return '';
        }
        return ref.props.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <ReactSelect
        value={selected}
        onChange={e => setSelected(e)}
        ref={selectRef}
        classNamePrefix="react-select"
        options={options}
        styles={customStyles}
        {...rest}
      />

      {error && <span style={{ color: '#f00' }}>{error}</span>}
    </>
  );
};
export default Select;
