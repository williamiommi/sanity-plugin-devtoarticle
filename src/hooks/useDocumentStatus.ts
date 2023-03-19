import {DocumentActionProps, SanityDocument} from 'sanity'
import useDocumentDevtoValues from './useDocumentDevtoValues'

interface ReturnType {
  sanityDocIsPublished: SanityDocument | boolean | null
  canCreateDraft: boolean
  canCreatePublished: boolean
  canUpdate: boolean
  canPublish: boolean
  canUnpublish: boolean
  canUnlink: boolean
}

const useDocumentStatus = (docProps: DocumentActionProps): ReturnType => {
  const {sanityDocIsPublished, devtoIDValue, devtoIsPublishedValue} =
    useDocumentDevtoValues(docProps)

  return {
    sanityDocIsPublished,
    canCreateDraft: !!(sanityDocIsPublished && !devtoIDValue),
    canCreatePublished: !!(sanityDocIsPublished && !devtoIDValue && !devtoIsPublishedValue),
    canUpdate: !!(sanityDocIsPublished && devtoIDValue),
    canPublish: !!(sanityDocIsPublished && devtoIDValue && !devtoIsPublishedValue),
    canUnpublish: !!(sanityDocIsPublished && devtoIDValue && devtoIsPublishedValue),
    canUnlink: !!(sanityDocIsPublished && devtoIDValue),
  }
}

export default useDocumentStatus
