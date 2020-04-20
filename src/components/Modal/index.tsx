import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import ReactModal from 'react-modal';

ReactModal.defaultStyles.overlay.backgroundColor = '#000000b8';

interface IProps {
  open: boolean;
  closeModal: () => void;
  children: JSX.Element | JSX.Element[];
}

export default function Modal({ open, closeModal, children }: IProps) {
  const { colors } = useContext(ThemeContext);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '450px',
      boxShadow: '0px 0px 10px #00000033',
      borderRadius: '4px',
      padding: '25px',
      backgroundColor: colors.primaryBackgroundTable,
      border: 'none',
    },
  };

  return (
    <ReactModal isOpen={open} onRequestClose={closeModal} style={customStyles}>
      {children}
    </ReactModal>
  );
}
