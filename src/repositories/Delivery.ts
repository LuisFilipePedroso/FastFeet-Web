import api from 'services/api';

import IDelivery from 'interfaces/Delivery';

interface IParams {
  recipient_id: number;
  deliveryman_id: number;
  product: string;
}

class DeliveryRepository {
  async findAll(filter = ''): Promise<IDelivery[]> {
    const response = await api.get(`/delivery?product=${filter}`);
    return response.data;
  }

  async create(data: IParams): Promise<IDelivery> {
    const response = await api.post('/delivery', data);
    return response.data;
  }

  async update(data: IParams, id: number): Promise<IDelivery> {
    const response = await api.put(`/delivery/${id}`, data);
    return response.data;
  }
}

export default new DeliveryRepository();
