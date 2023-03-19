const formattedDateObj = (date: Date): {year: string; month: string; day: string} => {
  try {
    const month = date.toLocaleString('en-US', {
      month: 'long',
    })
    const day = date.toLocaleString('en-US', {
      day: '2-digit',
    })
    const year = date.toLocaleString('en-US', {
      year: 'numeric',
    })
    return {year, month, day}
  } catch (e) {
    console.error(e)
    return {year: '//', month: '//', day: '//'}
  }
}

export default formattedDateObj
