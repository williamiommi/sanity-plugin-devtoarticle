const apiErrorHandler = (e: unknown) => {
  if (e instanceof String) {
    return e.toString()
  }
  if (e instanceof Error) {
    return e.message
  }
  return 'Unknown error'
}

export default apiErrorHandler
