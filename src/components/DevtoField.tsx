import {DevtoArticleConfig} from '../'
import ArticleBox from '../components/ArticleBox'
import ArticleError from '../components/ArticleError'
import useFetchArticle from '../hooks/useFetchArticle'
import {Spinner} from '@sanity/ui'
import {ObjectFieldProps} from 'sanity'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

export interface DevtoFieldProps extends ObjectFieldProps {
  config: DevtoArticleConfig
}

const DevtoField = (props: DevtoFieldProps) => {
  const {article, devtoIdValue, isError} = useFetchArticle(props.config, props.value)

  if (!devtoIdValue) return null

  if (!isError && !article) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  if (isError)
    return (
      <>
        <ArticleError id={devtoIdValue} />
      </>
    )

  return <ArticleBox article={article} />
}

// Create a client
const queryClient = new QueryClient()

const DevtoFieldWrapper = (props: DevtoFieldProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DevtoField {...props} />
    </QueryClientProvider>
  )
}

export default DevtoFieldWrapper
