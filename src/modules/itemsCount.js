const itemCounterFunction = () => {
  const breweryinfo = document.querySelector('.homepage-content');
  let counter = 0;
  counter = breweryinfo.getElementsByTagName('img').length;
  return counter;
};
export default itemCounterFunction;