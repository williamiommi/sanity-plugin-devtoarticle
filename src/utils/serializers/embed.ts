const embedSerialiizer = (props: any): string => {
  return `{% embed ${props.node.url} %}`
}

export default embedSerialiizer
