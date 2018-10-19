import { GaleriasModule } from './galerias.module';

describe('GaleriasModule', () => {
  let galeriasModule: GaleriasModule;

  beforeEach(() => {
    galeriasModule = new GaleriasModule();
  });

  it('should create an instance', () => {
    expect(galeriasModule).toBeTruthy();
  });
});
