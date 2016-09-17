import { inject, Lazy } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

// polyfill fetch client conditionally
const fetch = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve(self.fetch);

@inject(Lazy.of(HttpClient))
export class ApiAdapter {
	http;

	constructor(getHttpClient) {
    this.getHttpClient = getHttpClient;
	}

	async created() {
	  // ensure fetch is polyfilled before we create the http client
	  await fetch;
	  this.http = this.getHttpClient();

	  this.http.configure(config => {
	    config
	      .useStandardConfiguration()
	      .withBaseUrl(`http://localhost:${process.env.API_PORT}/`);
	  });
  }

  async getProfile(id) {
  	let profile = { name: 'Chengsong Hua', email: 'myemail@uw.edu', password: 'somepassword' };
  	return profile;
  }
}
