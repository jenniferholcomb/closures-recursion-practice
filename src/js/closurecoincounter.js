export const coinCount = (coinValue) => {
  return (amountToConvert) => {
    return amountToConvert / coinValue;
  }
}
