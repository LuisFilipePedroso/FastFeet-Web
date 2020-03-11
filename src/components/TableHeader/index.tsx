import React, { memo } from 'react';

import { MdSearch, MdAdd } from 'react-icons/md';
import { Container, InputWrapper, Grid } from './styles';

interface IProps {
  title: string;
}

function TableHeader({ title }: IProps) {
  return (
    <Container>
      <h3>Gerenciando {title}</h3>

      <Grid>
        <InputWrapper>
          <MdSearch color="#999999" size={20} />
          <input name="search" placeholder={`Buscar por ${title}`} />
        </InputWrapper>

        <button type="button">
          <MdAdd color="#fff" size={22} />
          Cadastrar
        </button>
      </Grid>
    </Container>
  );
}

export default memo(TableHeader);
