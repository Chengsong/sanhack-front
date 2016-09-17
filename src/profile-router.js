export class ProfileRouter {
  heading = 'My Account';

  configureRouter(config, router) {
    config.map([
      { route: ['', 'profile'], name: 'profile',       moduleId: './profile',       nav: true, title: 'Profile' },
      { route: 'setting',         name: 'setting',         moduleId: './setting',   nav: true, title: 'Setting' }
    ]);

    this.router = router;
  }
}
