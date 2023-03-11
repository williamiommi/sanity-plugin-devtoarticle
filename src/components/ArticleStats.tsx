import {AiFillEye, AiFillHeart, AiFillMessage, AiOutlineFieldTime} from 'react-icons/ai'

interface ArticleStatsProps {
  public_reactions_count?: number
  comments_count?: number
  page_views_count?: number
  reading_time_minutes?: number
}

const ArticleStats = (props: ArticleStatsProps) => {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="flex items-center">
        <AiFillHeart />
        &nbsp;{props.public_reactions_count}
      </span>
      <span className="flex items-center">
        <AiFillMessage />
        &nbsp;{props.comments_count}
      </span>
      <span className="flex items-center">
        <AiFillEye />
        &nbsp;{props.page_views_count}
      </span>
      <span className="flex items-center">
        <AiOutlineFieldTime />
        &nbsp;{props.reading_time_minutes}&nbsp;min
      </span>
    </div>
  )
}

ArticleStats.defaultProps = {
  public_reactions_count: 0,
  comments_count: 0,
  page_views_count: 0,
  reading_time_minutes: 0,
}

export default ArticleStats
