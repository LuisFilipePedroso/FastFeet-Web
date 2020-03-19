import api from 'services/api';

import IDeliveryMan from 'interfaces/DeliveryMan';

class DeliveryRepository {
  async findAll(filter = ''): Promise<IDeliveryMan[]> {
    const response = await api.get(`/deliveryman?name=${filter}`);
    return response.data;
  }

  async create(data: IDeliveryMan): Promise<IDeliveryMan> {
    const response = await api.post('/deliveryman', data);
    return response.data;
  }

  async update(data: IDeliveryMan, id: number): Promise<IDeliveryMan> {
    const response = await api.put(`/deliveryman/${id}`, data);
    return response.data;
  }

  async delete(id: number): Promise<number> {
    const response = await api.delete(`/deliveryman/${id}`);
    return response.status;
  }
}

export default new DeliveryRepository();
