import { Injectable } from '@nestjs/common';

@Injectable()
export class FakeStorageService {
  private data: Record<string, any> = {};

  setItem(key: string, value: any) {
    this.data[key] = value;
  }

  getItem(key: string) {
    return this.data[key] ?? null;
  }

  removeItem(key: string) {
    delete this.data[key];
  }

  clear() {
    this.data = {};
  }
}

