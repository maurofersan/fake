import { Injectable } from '@nestjs/common';
import { ApiResponseBuilderService } from '../utils/api-response-builder.service';
import { SDKTypeDto } from '../dto/identy.dto';
import { ApiResponse } from '../dto/common.dto';

@Injectable()
export class IdentyService {
  constructor(private readonly apiResponseBuilder: ApiResponseBuilderService) {}

  generatePubKey(sdkType: SDKTypeDto): ApiResponse<string> {
    console.log('sdkType::', sdkType);
    const pubKey = process.env.OCR_PUB_KEY ?? 'x';
    return this.apiResponseBuilder.success(
      pubKey,
      'Clave pública generada exitosamente',
    );
  }
}
