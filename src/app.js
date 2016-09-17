export class App {
  configureRouter(config, router) {
    config.title = 'Stress Catcher';
    config.map([
      { route: ['', 'login'], 		name: 'login',      		moduleId: './login',      		nav: true, title: 'Login' },
      { route: 'feels',       		name: 'feels',        	moduleId: './feels',        	nav: true, title: 'User Feels'},
      { route: 'my-feel', 				name: 'my-feel', 				moduleId: './my-feel', 				nav: true, title: 'My Feel'},
      { route: 'profile-router',  name: 'profile-router', moduleId: './profile-router', nav: true, title: 'My Account' }
    ]);

    this.router = router;
  }
}
