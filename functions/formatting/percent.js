const percent = (value, decimals = 2) => {
  if (typeof value !== "number") {
    return value
  }
  if (isNaN(value)) {
    const zero = 0
    return `${zero.toFixed(decimals)}%`
  }
  return `${value.toFixed(decimals)}%`
}

export default percent
