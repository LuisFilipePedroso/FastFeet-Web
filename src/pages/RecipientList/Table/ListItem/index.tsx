import React, { memo, useMemo } from 'react';
import IRecipient from 'interfaces/Recipient';

import Menu from 'components/Menu';
import EditButton from 'components/EditButton';
import DeleteButton from 'components/DeleteButton';
import ConfirmAlert from 'components/ConfirmAlert';
import { confirmAlert } from 'react-confirm-alert';
import RecipientRepository from 'repositories/Recipient';

import history from 'services/history';
import api from 'services/api';

import { toast } from 'react-toastify';
import { Container } from './styles';

interface IProps {
  recipient: IRecipient;
  reload: () => void;
}

function ListItem({ recipient, reload }: IProps) {
  function handleEdit() {
    return history.push(`/recipient/${recipient.id}`);
  }

  async function handleConfirm() {
    try {
      await RecipientRepository.delete(recipient.id);
      toast.success('Destinatário deletado com sucesso!');
      reload();
    } catch (e) {
      toast.error('Algo de errado aconteceu! Tente novamente');
    }
  }

  function handleDelete() {
    confirmAlert({
      customUI: ({ onClose }) => (
        <ConfirmAlert onClose={onClose} onConfirm={handleConfirm} />
      ),
    });
  }

  return (
    <>
      <Container>
        <td>
          <p>{recipient.id}</p>
        </td>
        <td>
          <p>{recipient.name}</p>
        </td>
        <td>
          <p>{recipient.address}</p>
        </td>
        <td>
          <Menu>
            <li>
              <EditButton onClick={handleEdit} />
            </li>
            <li>
              <DeleteButton onClick={handleDelete} />
            </li>
          </Menu>
        </td>
      </Container>
    </>
  );
}

export default memo(ListItem);
