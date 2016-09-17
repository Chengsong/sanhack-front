export class App {
  configureRouter(config, router) {
    config.title = 'Stress Catcher';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: './users',        nav: true, title: 'Github Users' },
      { route: 'profile-router',  name: 'profile-router', moduleId: './profile-router', nav: true, title: 'My Account' }
    ]);

    this.router = router;
  }
}
