import api from 'services/api';

import IRecipient from 'interfaces/Recipient';

class RecipientRepository {
  async findAll(filter = ''): Promise<IRecipient[]> {
    const response = await api.get(`/recipient?name=${filter}`);
    return response.data;
  }

  async create(data: IRecipient): Promise<IRecipient> {
    const response = await api.post('/recipient', data);
    return response.data;
  }

  async update(data: IRecipient, id: number): Promise<IRecipient> {
    const response = await api.put(`/recipient/${id}`, data);
    return response.data;
  }

  async delete(id: number): Promise<number> {
    const response = await api.delete(`/recipient/${id}`);
    return response.status;
  }
}

export default new RecipientRepository();
