import React, { memo } from 'react';

import IDeliveryMan from 'interfaces/DeliveryMan';

import Menu from 'components/Menu';
import EditButton from 'components/EditButton';
import DeleteButton from 'components/DeleteButton';
import ConfirmAlert from 'components/ConfirmAlert';
import { confirmAlert } from 'react-confirm-alert';
import DeliveryManRepository from 'repositories/DeliveryMan';

import history from 'services/history';
import api from 'services/api';

import { toast } from 'react-toastify';

import { Container, DeliveryManInfo } from './styles';

interface IProps {
  deliveryMan: IDeliveryMan;
  reload: () => void;
}

function ListItem({ deliveryMan, reload }: IProps) {
  function handleEdit() {
    return history.push(`/deliveryman/${deliveryMan.id}`);
  }

  async function handleConfirm() {
    try {
      await DeliveryManRepository.delete(deliveryMan.id);
      toast.success('Encomenda deletada com sucesso!');
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
          <p>{deliveryMan.id}</p>
        </td>
        <td>
          <DeliveryManInfo>
            <span>{deliveryMan.acronymName}</span>
          </DeliveryManInfo>
        </td>
        <td>
          <p>{deliveryMan.name}</p>
        </td>
        <td>
          <p>{deliveryMan.email}</p>
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
