export const katexInlineSerialiizer = (props: any): string => {
  return `{% katex inline %}${props.children}{% endkatex %}`
}

export const katexBlockSerialiizer = (props: any): string => {
  return `{% katex %}\n${props.node.notation}\n{% endkatex %}`
}
