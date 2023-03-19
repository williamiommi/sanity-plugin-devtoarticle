import useNotification from '../hooks/useNotification'
import {IDevtoArticleResponse} from '../types/IDevtoArticle'
import apiErrorHandler from '../utils/apiErrorHandler'
import {useCallback, useEffect, useState} from 'react'
import {DevtoArticleConfig} from '..'
import DevtoArticleMetadata from '../schema/documents/DevtoArticle.metadata'

interface useFetchArticleResponse {
  article?: IDevtoArticleResponse
  devtoIdValue: string
  error: boolean
}

const useFetchArticle = (
  config: DevtoArticleConfig,
  value?: Record<string, unknown>
): useFetchArticleResponse => {
  const notify = useNotification()
  const [article, setArticle] = useState<IDevtoArticleResponse | undefined>()
  const [error, setError] = useState(false)
  const {devtoId, devtoUpdatedAt} = DevtoArticleMetadata.fields
  const devtoIdValue = value ? (value[devtoId.name] as string) : ''
  const devtoUpdatedAtValue = value ? value[devtoUpdatedAt.name] : ''

  const fetchArticle = useCallback(
    async (devtoID: string) => {
      try {
        if (!devtoID) return
        const res = await fetch(
          `${config.api.get}?${new URLSearchParams({
            articleId: devtoID,
          })}`
        )
        const json = await res.json()
        if (!res.ok) {
          throw new Error(json.error)
        }
        setArticle(json)
        setError(false)
      } catch (e) {
        setError(true)
        notify.error(apiErrorHandler(e))
      }
    },
    [config.api.get, notify]
  )

  const unsetArticle = () => {
    setArticle(undefined)
    setError(false)
  }

  useEffect(() => {
    if (devtoUpdatedAtValue || devtoIdValue) {
      fetchArticle(devtoIdValue)
    } else {
      unsetArticle()
    }
  }, [devtoIdValue, devtoUpdatedAtValue])

  return {
    article,
    devtoIdValue,
    error,
  }
}

export default useFetchArticle
