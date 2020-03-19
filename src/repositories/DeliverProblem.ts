import api from 'services/api';

import IDeliveryProblem from 'interfaces/DeliveryProblem';

class DeliveryProblemRepository {
  async findAll(): Promise<IDeliveryProblem[]> {
    const response = await api.get('/deliveries/problems');
    return response.data;
  }

  async cancelDelivery(id: number): Promise<number> {
    const response = await api.delete(`/problem/${id}/cancel-delivery`);
    return response.status;
  }
}

export default new DeliveryProblemRepository();
