interface ArticleLinksProps {
  url?: string
  published?: boolean
}

const AvailableLinks = [
  {path: '/', name: 'View', onlyPublished: true},
  {path: '/manage', name: 'Manage', onlyPublished: true},
  {path: '/stats', name: 'Stats', onlyPublished: true},
]

const ArticleLinks = (props: ArticleLinksProps) => {
  if (!props.url) return null
  return (
    <div className="flex w-16 flex-col gap-2 text-right">
      {AvailableLinks.filter((link) => link.onlyPublished === props.published).map((link) => (
        <a
          key={link.path}
          href={`${props.url}${link.path}`}
          className="cursor-pointer underline hover:opacity-90"
          target="_blank"
          rel="noreferrer"
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}

export default ArticleLinks
