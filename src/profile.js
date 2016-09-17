import { inject } from 'aurelia-framework';
import { ApiAdapter } from './api-adapter';

@inject(ApiAdapter)
export class Profile {
	name;
	email;
	password;

	constructor(adapter) {
		this.adapter = adapter;
	}

	async activate() {
		let profile = await this.adapter.getProfile(1);
		this.name = profile.name;
		this.email = profile.email;
		this.password = profile.password;
	}	
}
