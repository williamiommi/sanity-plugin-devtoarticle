export const katexInlineSerializer = (props: any): string => {
  return `{% katex inline %}${props.children}{% endkatex %}`
}

export const katexBlockSerializer = (props: any): string => {
  return `{% katex %}\n${props.node.notation}\n{% endkatex %}`
}
