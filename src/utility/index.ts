export function setItemToLocalStorage(value: any) {
  localStorage.setItem("cartItems", JSON.stringify(value));
}

export function getItemFromLocalStorage() {
  return JSON.parse(localStorage.getItem("cartItems")!);
}
