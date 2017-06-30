import { MeuPrimeiroPage } from './app.po';

describe('meu-primeiro App', () => {
  let page: MeuPrimeiroPage;

  beforeEach(() => {
    page = new MeuPrimeiroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
