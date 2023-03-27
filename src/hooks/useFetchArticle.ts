import useNotification from '../hooks/useNotification'
import {IDevtoArticleResponse} from '../types/IDevtoArticle'
import {DevtoArticleConfig} from '..'
import DevtoArticleMetadata from '../schema/documents/DevtoArticle.metadata'
import {useQuery} from '@tanstack/react-query'

interface useFetchArticleResponse {
  article?: IDevtoArticleResponse
  devtoIdValue: string
  isError: boolean
}

const fetchArticle = async (url: string, articleId: string) => {
  const res = await fetch(
    `${url}?${new URLSearchParams({
      articleId,
    })}`
  )
  return res.json()
}

const useFetchArticle = (
  config: DevtoArticleConfig,
  value?: Record<string, unknown>
): useFetchArticleResponse => {
  const {devtoId, devtoUpdatedAt} = DevtoArticleMetadata.fields
  const devtoIdValue = value ? (value[devtoId.name] as string) : ''
  const devtoUpdatedAtValue = value ? value[devtoUpdatedAt.name] : ''
  const notify = useNotification()
  const {data, isError, error} = useQuery({
    enabled: !!devtoIdValue,
    queryKey: [`devto.article${devtoUpdatedAtValue}`],
    queryFn: () => fetchArticle(config.api.get, devtoIdValue),
    refetchOnWindowFocus: false,
  })

  if (isError || data?.error) {
    notify.error(error || data?.error || 'Something went wrong')
  }

  return {
    article: data,
    devtoIdValue,
    isError: isError || data?.error,
  }
}

export default useFetchArticle
