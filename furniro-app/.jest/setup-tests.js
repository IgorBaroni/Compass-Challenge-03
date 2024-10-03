import "@testing-library/jest-dom";

// Mock para tirar o erro dos testes onde existe o splide
beforeEach(() => {
  global.matchMedia = jest.fn(() => ({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));
});
