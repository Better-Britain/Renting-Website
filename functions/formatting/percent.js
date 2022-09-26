const percent = (value) => {
  if (typeof value !== "number") {
    return value
  }
  return `${value}%`
}

export default percent
