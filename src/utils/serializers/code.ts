const codeSerializer = (props: any): string => {
  return `\`\`\`${props.node.language}\n${props.node.code}\n\`\`\``
}

export default codeSerializer
