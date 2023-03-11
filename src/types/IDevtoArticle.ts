export interface IDevtoArticleRequest {
  title: string
  body_markdown: string
  published?: boolean
  series?: string
  main_image?: string
  canonical_url?: string
  description?: string
  tags?: string[]
  organization_id?: number
}

export interface IDevtoArticleResponse {
  type_of?: string
  id?: number | string
  title?: string
  description?: string
  cover_image?: string
  readable_publish_date?: string
  social_image?: string
  tag_list?: string
  tags?: string[]
  slug?: string
  path?: string
  url?: string
  canonical_url?: string
  comments_count?: number
  positive_reactions_count?: number
  public_reactions_count?: number
  page_views_count?: number
  collection_id?: number
  created_at?: string
  edited_at?: string
  crossposted_at?: string
  published?: boolean
  published_at?: string
  last_comment_at?: string
  published_timestamp?: string
  reading_time_minutes?: number
  body_html?: string
  body_markdown?: string
  user?: {
    name?: string
    username?: string
    twitter_username?: string
    github_username?: string
    website_url?: string
    profile_image?: string
    profile_image_90?: string
  }
  organization?: {
    name?: string
    username?: string
    slug?: string
    profile_image?: string
    profile_image_90?: string
  }
}
