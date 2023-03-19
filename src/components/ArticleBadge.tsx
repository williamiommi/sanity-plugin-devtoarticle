import {Badge} from '@sanity/ui'

interface ArticleBadgeProps {
  published?: boolean
}

const ArticleBadge = (props: ArticleBadgeProps) => {
  return (
    <Badge tone={props.published ? 'positive' : 'caution'} className="absolute top-1 left-1 z-10">
      {props.published ? 'published' : 'draft'}
    </Badge>
  )
}

export default ArticleBadge
