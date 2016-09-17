import { inject } from 'aurelia-framework';
import { ApiAdapter } from 'api-adapter';

@inject(ApiAdapter)
export class Feels {
  heading = 'User Feel';
  users = [];

  constructor(adapter) {
    this.adapter = adapter;
  }

  async activate() {
    this.users = await this.adapter.getFeels();
  }
}
