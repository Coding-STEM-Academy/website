import Header from './Header.vue';

describe('Header', () => {
  it('should be a header', () => {
    expect(Header.name).toEqual('Header');
  });
});

AOS.init({
  duration: 1200,
})
