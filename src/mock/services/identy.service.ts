import { Injectable } from '@nestjs/common';

@Injectable()
export class IdentyService {
  getPubKey(): string {

    return process.env.OCR_PUB_KEY ?? '';
  }
}
