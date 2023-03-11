import ArticleBadge from './ArticleBadge'
import ArticleInfoDetail from './ArticleInfoDetail'
import ArticleLinks from './ArticleLinks'
import ArticleStats from './ArticleStats'
import {IDevtoArticleResponse} from '../types/IDevtoArticle'
import {Avatar} from '@sanity/ui'

interface ArticleBoxProps {
  article?: IDevtoArticleResponse
}

const ArticleBox = ({article}: ArticleBoxProps) => {
  if (!article) return null
  return (
    <div className="flex gap-3 rounded-lg bg-zinc-400/5 p-2">
      <div className="relative h-[120px] w-[120px] overflow-hidden rounded-md">
        <div className="absolute inset-0 bg-black/20" />
        <ArticleBadge published={article.published} />
        <img
          src={article.cover_image}
          alt={article.title}
          className="h-[120px] w-[120px] object-cover"
        />
        <ArticleInfoDetail />
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-bold leading-none line-clamp-2">{article.title}</h3>
        {article.description && <p className="italic line-clamp-1">{article.description}</p>}
        <section className="flex flex-1 items-end gap-2">
          <Avatar alt="A random face" color="orange" src={article.user?.profile_image} size={1} />
          <a
            className="underline line-clamp-1"
            href={`https://dev.to/${article.user?.username}`}
            target="_blank"
            rel="noreferrer"
          >
            {article.user?.name}
          </a>
          <span>•</span>
          <ArticleStats
            comments_count={article.comments_count}
            page_views_count={article.page_views_count}
            public_reactions_count={article.public_reactions_count}
            reading_time_minutes={article.reading_time_minutes}
          />
        </section>
      </div>
      <ArticleLinks published={article.published} url={article.url} />
    </div>
  )
}

export default ArticleBox
