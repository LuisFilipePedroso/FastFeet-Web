import React, { useState, memo } from 'react';

import IDelivery from 'interfaces/Delivery';

import Menu from 'components/Menu';
import ViewButton from 'components/ViewButton';
import EditButton from 'components/EditButton';
import DeleteButton from 'components/DeleteButton';

import Modal from '../../View';

import { Container, DeliveryManInfo, DeliveryStatus } from './styles';

interface IProps {
  delivery: IDelivery;
}

function ListItem({ delivery }: IProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
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
              <EditButton />
            </li>
            <li>
              <DeleteButton />
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
