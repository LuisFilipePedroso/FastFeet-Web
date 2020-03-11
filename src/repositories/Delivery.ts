import api from 'services/api';

import IDelivery from 'interfaces/Delivery';

class DeliveryRepository {
  async findAll(): Promise<IDelivery[]> {
    const response = await api.get('/delivery');
    return response.data;
  }
}

export default new DeliveryRepository();
