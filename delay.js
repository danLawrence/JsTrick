const delay = (() => {
  let delayTO = null;
  return (fn, ms) => {
    clearTimeout(delayTO);
    delayTO = setTimeout(fn, ms);
  }
})();
