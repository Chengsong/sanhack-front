import { inject, Lazy } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';

// polyfill fetch client conditionally
const fetch = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve(self.fetch);

@inject(Lazy.of(HttpClient))
export class ApiAdapter {
	http;

	constructor(getHttpClient) {
    this.getHttpClient = getHttpClient;
    fetch.then(polyfill => {
      this.http = this.getHttpClient();
      this.http.configure(config => {
        config
          .useStandardConfiguration()
          .withBaseUrl(`http://localhost:8080/`)
          .withDefaults({
            credentials: 'same-origin'
          });
      });
    });
	}

  async getFeels() {
    let response = await this.http.fetch('feels');
    let feels = response.json();
    // return feels;
  	return [
  		{ name: 'Jhon', image: 'https://avatars.githubusercontent.com/u/1?v=3', feel: 1},
  		{ name: 'Chengsong', image: 'https://avatars.githubusercontent.com/u/2?v=3', feel: 2},
  		{ name: '加瀬', image: 'https://avatars.githubusercontent.com/u/3?v=3', feel: 3},
  		{ name: 'Tanaka', image: 'https://avatars.githubusercontent.com/u/4?v=3', feel: 4},
  		{ name: '岩井', image: 'https://avatars.githubusercontent.com/u/5?v=3', feel: 5},
  	] 
  }

  async getProfile(id) {
  	let profile = { name: 'Chengsong Hua', email: 'myemail@uw.edu', password: 'somepassword' };
  	return profile;
  }

  async getQuestions() {
    let questions = [
      { content: 'How long did you sleep?', select1: '1', select2: '2', select3: '3', select4: '4', select5: '5' },
      { content: 'How much excercise do you do each week?', select1: '1', select2: '2', select3: '3', select4: '4', select5: '5' }
    ]
    return questions;
  }
}
