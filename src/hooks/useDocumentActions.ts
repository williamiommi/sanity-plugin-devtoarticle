import {useCallback} from 'react'
import {DocumentActionProps, useDataset, useDocumentOperation, useProjectId} from 'sanity'
import {DevtoArticleConfig} from '..'
import DevtoArticleMetadata from '../schema/documents/DevtoArticle.metadata'
import apiErrorHandler from '../utils/apiErrorHandler'
import generateArticle from '../utils/generateArticle'
import useDocumentDevtoValues from './useDocumentDevtoValues'
import useNotification from './useNotification'

interface ReturnType {
  createDraftArticle: () => Promise<void>
  createAndPublishArticle: () => Promise<void>
  updateArticle: () => Promise<void>
  publishArticle: () => Promise<void>
  unlinkArticle: () => void
  unpublishArticle: () => Promise<void>
}

const useDocumentActions = (
  docProps: DocumentActionProps,
  config: DevtoArticleConfig
): ReturnType => {
  const {devto, devtoId, devtoIsPublished, devtoSlug, devtoUpdatedAt} = DevtoArticleMetadata.fields
  const {patch, publish} = useDocumentOperation(docProps.id, docProps.type)
  const {devtoIDValue, devtoIsPublishedValue} = useDocumentDevtoValues(docProps)
  const notify = useNotification()
  const projectId = useProjectId()
  const dataset = useDataset()

  const patchField = useCallback(
    (field: any) => {
      if (docProps.published) patch.execute([{set: field}], docProps.published)
    },
    [docProps.published, patch]
  )

  const doCall = useCallback(
    async (method: string, url: string, data: any, isPublished: boolean, successMsg: string) => {
      try {
        if (!docProps.published) return null
        const article = generateArticle(docProps.published, isPublished, projectId, dataset)
        const res = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({article, ...data}),
        })
        const json = await res.json()
        if (!res.ok) {
          throw new Error(json.error)
        }
        patchField({
          [devto.name]: {
            [devtoId.name]: json.id,
            [devtoIsPublished.name]: isPublished,
            [devtoSlug.name]: {current: json.slug},
            [devtoUpdatedAt.name]: new Date().toISOString(),
          },
        })
        publish.execute()
        notify.success(successMsg)
        return true
      } catch (e) {
        notify.error(apiErrorHandler(e))
        return false
      }
    },
    [
      devto.name,
      devtoId.name,
      devtoIsPublished.name,
      devtoSlug.name,
      devtoUpdatedAt.name,
      docProps.published,
      notify,
      patchField,
      publish,
      projectId,
      dataset,
    ]
  )

  const create = useCallback(
    async (isPublished: boolean, successMsg: string) => {
      await doCall('POST', config.api.create, {}, isPublished, successMsg)
    },
    [config.api.create, doCall]
  )

  const update = useCallback(
    async (isPublished: boolean, successMsg: string) => {
      await doCall('PUT', config.api.update, {id: devtoIDValue}, isPublished, successMsg)
    },
    [config.api.update, devtoIDValue, doCall]
  )

  const createDraftArticle = useCallback(async () => {
    await create(false, 'Draft created on DEV')
  }, [create])

  const createAndPublishArticle = useCallback(async () => {
    await create(true, 'Article published on DEV')
  }, [create])

  const updateArticle = useCallback(async () => {
    await update(devtoIsPublishedValue, 'Article updated on DEV')
  }, [update, devtoIsPublishedValue])

  const publishArticle = useCallback(async () => {
    await update(true, 'Article published on DEV')
  }, [update])

  const unpublishArticle = useCallback(async () => {
    await update(false, 'Article unpublished on DEV')
  }, [update])

  const unlinkArticle = useCallback(() => {
    if (docProps.published) {
      patchField({[devto.name]: undefined})
      publish.execute()
      notify.success('Document unlinked correctly!')
    }
  }, [docProps.published, devto.name, publish, notify, patchField])

  return {
    createDraftArticle,
    createAndPublishArticle,
    updateArticle,
    publishArticle,
    unlinkArticle,
    unpublishArticle,
  }
}

export default useDocumentActions
