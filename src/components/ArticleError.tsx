import {LinkRemovedIcon} from '@sanity/icons'
import {Card, KBD} from '@sanity/ui'

interface ArticleErrorProps {
  id: string
}

const ArticleError = ({id}: ArticleErrorProps) => {
  return (
    <Card tone="critical" padding={[4]}>
      <h2 className="text-lg font-bold">🚨 Something went wrong! 🚨</h2>
      <p className="mt-5">
        We couldn&apos;t find any article with id <span className="font-bold italic">{id}</span>
      </p>
      <p className="mt-2">
        Please visit your account on&nbsp;
        <a href="https://dev.to" target="_blank" rel="noreferrer" className="font-bold underline">
          Dev.to
        </a>
        &nbsp;to investigate more or&nbsp;
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <KBD padding={[1, 1, 2]} style={{verticalAlign: 'top'}}>
          <LinkRemovedIcon />
          &nbsp;Unlink
        </KBD>
        &nbsp;the document.
      </p>
    </Card>
  )
}

export default ArticleError
