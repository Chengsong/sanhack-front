import { inject } from 'aurelia-framework';
import { ApiAdapter } from 'api-adapter';
import { Router } from 'aurelia-router';

@inject(ApiAdapter, Router)
export class MyFeel {
	heading = 'How are you feeling today?';
	router;
	adapter;
	questions;
	selected = [];
	feel;

	constructor(adapter, router) {
		this.adapter = adapter;
		this.router = router;
	}

	async activate() {
		this.questions = await this.adapter.getQuestions();
	}

	submit() {
		this.router.navigate('feels');
	}

	select(feel) {
		this.feel = feel;
	}
}
