import {DevtoArticleConfig} from '../'
import ArticleBox from '../components/ArticleBox'
import ArticleError from '../components/ArticleError'
import useFetchArticle from '../hooks/useFetchArticle'
import {Spinner} from '@sanity/ui'
import {ObjectFieldProps} from 'sanity'

export interface DevtoFieldProps extends ObjectFieldProps {
  config: DevtoArticleConfig
}

const DevtoField = (props: DevtoFieldProps) => {
  const {article, devtoIdValue, error} = useFetchArticle(props.config, props.value)

  if (!devtoIdValue) return null

  if (!error && !article) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  if (error)
    return (
      <>
        <ArticleError id={devtoIdValue} />
      </>
    )

  return <ArticleBox article={article} />
}

export default DevtoField
