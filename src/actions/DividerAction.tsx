import {DocumentActionProps} from 'sanity'
import {DevtoArticleConfig} from '..'
import useDocumentStatus from '../hooks/useDocumentStatus'

const DividerAction = (props: DocumentActionProps, config?: DevtoArticleConfig) => {
  const {sanityDocIsPublished} = useDocumentStatus(props)
  if (sanityDocIsPublished) {
    return {
      label: '------------------------',
      disabled: true,
    }
  }
  return null
}

export default DividerAction
