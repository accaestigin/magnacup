function setEqual(dimensions1, dimensions2) {
  // Assuming dimensions are arrays and we are comparing them element by element
  if (dimensions1.length !== dimensions2.length) {
    return false;
  }
  for (let i = 0; i < dimensions1.length; i++) {
    if (dimensions1[i] !== dimensions2[i]) {
      return false;
    }
  }
  return true;
}
