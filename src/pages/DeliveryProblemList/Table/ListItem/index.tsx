import React, { useState, memo, useMemo } from 'react';

import IDeliveryProblem from 'interfaces/DeliveryProblem';

import Menu from 'components/Menu';
import ViewButton from 'components/ViewButton';
import DeleteButton from 'components/DeleteButton';
import ConfirmAlert from 'components/ConfirmAlert';
import { confirmAlert } from 'react-confirm-alert';

import { toast } from 'react-toastify';
import DeliveryProblemRepository from 'repositories/DeliverProblem';

import Modal from '../../View';

import { Container } from './styles';

interface IProps {
  deliveryProblem: IDeliveryProblem;
  reload: () => void;
}

function ListItem({ deliveryProblem, reload }: IProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  deliveryProblem = useMemo(
    () => ({
      ...deliveryProblem,
      shortDescription: deliveryProblem.description.substr(0, 74),
    }),
    [deliveryProblem]
  );

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  async function handleConfirm() {
    try {
      await DeliveryProblemRepository.cancelDelivery(deliveryProblem.id);
      toast.success('Encomenda cancelada com sucesso!');
      reload();
    } catch (e) {
      toast.error('Algo de errado aconteceu! Tente novamente');
    }
  }

  function handleDelete() {
    confirmAlert({
      customUI: ({ onClose }) => (
        <ConfirmAlert
          onClose={onClose}
          onConfirm={handleConfirm}
          infoMessage="Deseja cancelar esta encomenda?"
        />
      ),
    });
  }

  return (
    <>
      <Container>
        <td>
          <p>{deliveryProblem.delivery_id}</p>
        </td>
        <td>
          <p>{deliveryProblem.shortDescription}...</p>
        </td>
        <td>
          <Menu>
            <li>
              <ViewButton onClick={handleOpenModal} />
            </li>
            <li>
              <DeleteButton onClick={handleDelete} text="Cancelar encomenda" />
            </li>
          </Menu>
        </td>
      </Container>

      <Modal
        open={isModalOpen}
        closeModal={handleCloseModal}
        deliveryProblem={deliveryProblem}
      />
    </>
  );
}

export default memo(ListItem);
