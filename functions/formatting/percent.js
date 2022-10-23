const percent = (value, decimals = 2) => {
  if (typeof value !== "number") {
    return value
  }
  return `${value.toFixed(decimals)}%`
}

export default percent
