import {Dialog, KBD} from '@sanity/ui'
import {useCallback, useState} from 'react'
import {useFormValue} from 'sanity'
import DevtoArticleMetadata from '../schema/documents/DevtoArticle.metadata'

interface ArticleInfoDetailProps {}

const ArticleInfoDetail = (props: ArticleInfoDetailProps) => {
  const [open, setOpen] = useState(false)
  const onClose = useCallback(() => setOpen(false), [])
  const onOpen = useCallback(() => setOpen(true), [])
  const values = useFormValue([DevtoArticleMetadata.fields.devto.name]) as any
  return (
    <div className="absolute bottom-px left-px cursor-pointer">
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <KBD onClick={onOpen}>Show Info</KBD>
      {open && (
        <Dialog
          header="Dev.to info fields"
          id="dialog-example"
          onClose={onClose}
          zOffset={1000}
          width={1}
        >
          <div className="p-5">
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </div>
        </Dialog>
      )}
    </div>
  )
}

export default ArticleInfoDetail
