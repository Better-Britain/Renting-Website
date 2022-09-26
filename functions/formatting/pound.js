const pound = (amount) => {
  if (typeof amount !== "number") {
    return amount
  }
  return `£${amount.toLocaleString()}`
}

export default pound
