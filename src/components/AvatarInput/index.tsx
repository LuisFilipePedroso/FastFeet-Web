import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import api from 'services/api';

import { MdInsertPhoto } from 'react-icons/md';
import { Container } from './styles';

export default function AvatarInput({
  name,
  label = '',
  className = '',
  ...rest
}) {
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState('');

  const ref = useRef();

  useEffect(() => {
    setPreview(defaultValue?.url);
  }, [defaultValue]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [fieldName, ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar" className={className}>
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <div>
            <MdInsertPhoto color="#DDDDDD" size={38} />
            <h3>Adicionar foto</h3>
          </div>
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>

      {error && <span style={{ color: '#f00' }}>{error}</span>}
    </Container>
  );
}
