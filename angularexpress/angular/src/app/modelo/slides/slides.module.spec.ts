import { SlidesModule } from './slides.module';

describe('SlidesModule', () => {
  let slidesModule: SlidesModule;

  beforeEach(() => {
    slidesModule = new SlidesModule();
  });

  it('should create an instance', () => {
    expect(slidesModule).toBeTruthy();
  });
});
