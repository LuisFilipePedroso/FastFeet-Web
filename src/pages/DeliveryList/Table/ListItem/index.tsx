import React, { useState, memo } from 'react';

import IDelivery from 'interfaces/Delivery';

import Menu from 'components/Menu';
import ViewButton from 'components/ViewButton';
import EditButton from 'components/EditButton';
import DeleteButton from 'components/DeleteButton';
import ConfirmAlert from 'components/ConfirmAlert';
import { confirmAlert } from 'react-confirm-alert';

import history from 'services/history';
import api from 'services/api';

import { toast } from 'react-toastify';
import DeliveryRepository from 'repositories/Delivery';

import Modal from '../../View';

import { Container, DeliveryManInfo, DeliveryStatus } from './styles';

interface IProps {
  delivery: IDelivery;
  reload: () => void;
}

function ListItem({ delivery, reload }: IProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  function handleEdit() {
    return history.push(`/delivery/${delivery.id}`);
  }

  async function handleConfirm() {
    try {
      await DeliveryRepository.delete(delivery.id);
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
          <p>{delivery.id}</p>
        </td>
        <td>
          <p>{delivery.recipient.name}</p>
        </td>
        <td>
          <DeliveryManInfo>
            <span>{delivery.deliveryman.acronymName}</span>
            <p>{delivery.deliveryman.name}</p>
          </DeliveryManInfo>
        </td>
        <td>
          <p>{delivery.recipient.city}</p>
        </td>
        <td>
          <p>{delivery.recipient.state}</p>
        </td>
        <td>
          <DeliveryStatus
            backgroundLight={delivery.status.backgroundLight}
            backgroundDark={delivery.status.backgroundDark}
          >
            <span />
            <p>{delivery.status.title}</p>
          </DeliveryStatus>
        </td>
        <td>
          <Menu>
            <li>
              <ViewButton onClick={handleOpenModal} />
            </li>
            <li>
              <EditButton onClick={handleEdit} />
            </li>
            <li>
              <DeleteButton onClick={handleDelete} />
            </li>
          </Menu>
        </td>
      </Container>

      <Modal
        open={isModalOpen}
        closeModal={handleCloseModal}
        delivery={delivery}
      />
    </>
  );
}

export default memo(ListItem);
