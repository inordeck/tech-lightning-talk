import { NpmInstallMdbProjectPage } from './app.po';

describe('npm-install-mdb-project App', () => {
  let page: NpmInstallMdbProjectPage;

  beforeEach(() => {
    page = new NpmInstallMdbProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
