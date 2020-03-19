import Recipient from './Recipient';
import DeliveryMan from './DeliveryMan';
import File from './File';

interface Status {
  title: string;
  backgroundLight: string;
  backgroundDark: string;
}

export default interface IDelivery {
  id?: number;
  recipient_id: number;
  deliveryman_id: number;
  signature_id?: number;
  product: string;
  canceled_at?: Date;
  start_date?: Date;
  end_date?: Date;
  created_at?: Date;
  updated_at?: Date;
  recipient?: Recipient;
  deliveryman?: DeliveryMan;
  signature?: File;
  status?: Status;
};
