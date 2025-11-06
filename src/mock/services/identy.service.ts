import { Injectable } from '@nestjs/common';

import { SDKTypeDto } from '../dto/identy.dto';

@Injectable()
export class IdentyService {
  generatePubKey(sdkType: SDKTypeDto): string {
    console.log('sdkType::', sdkType);
    return process.env.OCR_PUB_KEY ?? 'x';
  }
}
