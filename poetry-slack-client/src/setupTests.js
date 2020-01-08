import '@testing-library/jest-dom/extend-expect'

// Silence console.error to get rid of react-intl errors. Found at https://til.hashrocket.com/posts/hrhejhqg2n-turn-off-console-error-messages-in-a-test
const originalError = console.error
beforeAll(() => {
   console.error = jest.fn()
})
afterAll(() => {
   console.error = originalError
})
