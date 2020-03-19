import api from 'services/api';

import IDelivery from 'interfaces/Delivery';

class DeliveryRepository {
  async findAll(filter = ''): Promise<IDelivery[]> {
    const response = await api.get(`/delivery?product=${filter}`);
    return response.data;
  }

  async create(data: IDelivery): Promise<IDelivery> {
    const response = await api.post('/delivery', data);
    return response.data;
  }

  async update(data: IDelivery, id: number): Promise<IDelivery> {
    const response = await api.put(`/delivery/${id}`, data);
    return response.data;
  }

  async delete(id: number): Promise<number> {
    const response = await api.delete(`/delivery/${id}`);
    return response.status;
  }
}

export default new DeliveryRepository();
