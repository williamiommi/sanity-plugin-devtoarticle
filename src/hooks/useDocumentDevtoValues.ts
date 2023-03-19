import {useMemo} from 'react'
import {DocumentActionProps, SanityDocument} from 'sanity'
import DevtoArticleMetadata from '../schema/documents/DevtoArticle.metadata'
import _get from '../utils/_get'

interface ReturnType {
  sanityDocIsPublished: SanityDocument | boolean | null
  devtoIDValue: number
  devtoIsPublishedValue: boolean
  devtoUpdatedAtValue: string
}

const useDocumentDevtoValues = (props: DocumentActionProps): ReturnType => {
  const {devto, devtoId, devtoIsPublished, devtoUpdatedAt} = DevtoArticleMetadata.fields

  const sanityDocIsPublished = useMemo(
    () => !props.draft && props.published,
    [props.draft, props.published]
  )

  const devtoIDValue = useMemo(
    () => _get(props.published, `${devto.name}.${devtoId.name}`),
    [props.published, devto.name, devtoId.name]
  )

  const devtoIsPublishedValue = useMemo(
    () => _get(props.published, `${devto.name}.${devtoIsPublished.name}`),
    [props.published, devto.name, devtoIsPublished.name]
  )

  const devtoUpdatedAtValue = useMemo(
    () => _get(props.published, `${devto.name}.${devtoUpdatedAt.name}`),
    [props.published, devto.name, devtoUpdatedAt.name]
  )

  return {
    sanityDocIsPublished,
    devtoIDValue,
    devtoIsPublishedValue,
    devtoUpdatedAtValue,
  }
}

export default useDocumentDevtoValues
