import ApiService from '../api-service';
import { type IOrder } from './dto/order.dto';
import { CreateOrderResponseDto } from './dto/create-order-response.dto';

class OrderApiService extends ApiService {
  create = async (data: IOrder): Promise<CreateOrderResponseDto> =>
    await this.post('/send', data).then((res) => res.data);
}

export const OrderApi = new OrderApiService('order');
