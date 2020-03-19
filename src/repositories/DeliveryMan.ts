import api from 'services/api';

import IDeliveryMan from 'interfaces/DeliveryMan';

interface IParams {
  recipient_id: number;
  deliveryman_id: number;
  product: string;
}

class DeliveryRepository {
  async findAll(filter = ''): Promise<IDeliveryMan[]> {
    const response = await api.get(`/deliveryman?name=${filter}`);
    return response.data;
  }

  async create(data: IParams): Promise<IDeliveryMan> {
    const response = await api.post('/deliveryman', data);
    return response.data;
  }

  async update(data: IParams, id: number): Promise<IDeliveryMan> {
    const response = await api.put(`/deliveryman/${id}`, data);
    return response.data;
  }
}

export default new DeliveryRepository();
