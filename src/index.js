export default (...selectors) => (state, ownProps) => ({
  ...selectors.reduce(
    (accumulator, selector) => ({ ...accumulator, ...selector(state, ownProps) }),
    {},
  ),
  ...ownProps,
});
