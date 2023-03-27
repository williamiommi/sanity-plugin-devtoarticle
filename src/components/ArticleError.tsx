import {LinkRemovedIcon} from '@sanity/icons'
import {Card, KBD} from '@sanity/ui'
import {FaDev} from 'react-icons/fa'

interface ArticleErrorProps {
  id: string
}

const ArticleError = ({id}: ArticleErrorProps) => {
  return (
    <Card tone="critical" padding={[4]} style={{position: 'relative'}}>
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
      <span className="absolute top-1 right-1 text-7xl opacity-[0.04]">
        <FaDev />
      </span>
    </Card>
  )
}

export default ArticleError
