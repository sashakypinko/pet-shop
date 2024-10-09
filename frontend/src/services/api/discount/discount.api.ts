import ApiService from '../api-service';
import { GetDiscountResponseDto } from './dto/get-discount-response.dto';
import { GetDiscountRequestDto } from './dto/get-discount-request.dto';

class DiscountApiService extends ApiService {
  getDiscount = async (data: GetDiscountRequestDto): Promise<GetDiscountResponseDto> =>
    await this.post('send', data).then((res) => res.data);
}

export const DiscountApi = new DiscountApiService('sale');
