interface IParams {
  startDate: Date;
  endDate: Date;
  canceledAt: Date;
}

export default function ({ startDate, endDate, canceledAt }: IParams) {
  if (startDate !== null && endDate !== null) {
    return {
      title: 'Entregue',
      backgroundLight: '#DFF0DF',
      backgroundDark: '#2CA42B',
    };
  }

  if (canceledAt !== null) {
    return {
      title: 'Cancelada',
      backgroundLight: '#FAB0B0',
      backgroundDark: '#DE3B3B',
    };
  }

  if (startDate === null) {
    return {
      title: 'Pendente',
      backgroundLight: '#F0F0DF',
      backgroundDark: '#C1BC35',
    };
  }

  if (startDate !== null) {
    return {
      title: 'Retirada',
      backgroundLight: '#BAD2FF',
      backgroundDark: '#4D85EE',
    };
  }
}
