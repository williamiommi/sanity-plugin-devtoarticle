import {useCallback, useEffect, useState} from 'react'
import hash from '../utils/hash'

interface SpotifyPreviewProps {
  url: string
  showPreview: boolean
}

const cachePreview = new Map()

const SpotifyPreview = ({url, showPreview}: SpotifyPreviewProps) => {
  const [html, setHtml] = useState(null)
  const fetchPreview = useCallback(async (link: string) => {
    const hashedLink = hash(link)
    setHtml(null)

    // check cache
    if (cachePreview.has(hashedLink)) {
      setHtml(cachePreview.get(hashedLink))
    } else {
      const res = await fetch(`https://open.spotify.com/oembed?url=${link}`)
      const data = await res.json()
      if (data.html) {
        cachePreview.set(hashedLink, data.html)
        setHtml(data.html)
      }
    }
  }, [])
  useEffect(() => {
    if (showPreview) fetchPreview(url)
  }, [showPreview, fetchPreview, url])

  if (!showPreview || !html) return null
  return <div dangerouslySetInnerHTML={{__html: html}} />
}

export default SpotifyPreview
