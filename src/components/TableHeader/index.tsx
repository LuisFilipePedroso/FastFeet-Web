import React, { memo } from 'react';

import { MdSearch, MdAdd } from 'react-icons/md';
import { DebounceInput } from 'react-debounce-input';
import { Container, InputWrapper, Grid, Button } from './styles';

interface IProps {
  title: string;
  path: string;
  value: string;
  handleChange: ({ target: any }) => void;
}

function TableHeader({ title, path, value, handleChange }: IProps) {
  return (
    <Container>
      <h3>Gerenciando {title}</h3>

      <Grid>
        <InputWrapper>
          <MdSearch color="#999999" size={20} />
          <DebounceInput
            minLength={2}
            debounceTimeout={500}
            value={value}
            onChange={handleChange}
            placeholder={`Buscar por ${title}`}
          />
        </InputWrapper>

        <Button to={path} type="button">
          <MdAdd color="#fff" size={22} />
          Cadastrar
        </Button>
      </Grid>
    </Container>
  );
}

export default memo(TableHeader);
