import {IconType} from 'react-icons'
import {
  BsFacebook,
  BsGlobe,
  BsInstagram,
  BsLinkedin,
  BsSpotify,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs'

export type EmbedType = 'youtube' | 'twitter' | 'linkedin' | 'instagram' | 'facebook' | 'spotify'

interface EmbedMetadataProps {
  name: 'devto.embed'
  title: 'Embed'
  icon: IconType
  embedTypeList: {
    value: EmbedType
    title: string
    icon: IconType
  }[]
}

const EmbedMetadata: EmbedMetadataProps = {
  name: 'devto.embed',
  title: 'Embed',
  icon: BsGlobe,
  embedTypeList: [
    {value: 'youtube', title: 'Youtube', icon: BsYoutube},
    {value: 'twitter', title: 'Twitter', icon: BsTwitter},
    {value: 'linkedin', title: 'Linkedin', icon: BsLinkedin},
    {value: 'instagram', title: 'Instagram', icon: BsInstagram},
    {value: 'facebook', title: 'Facebook', icon: BsFacebook},
    {value: 'spotify', title: 'Spotify', icon: BsSpotify},
  ],
}

export default EmbedMetadata
