import PropTypes from 'prop-types'

/* base types ------------------------------ */
export const slugPropType = PropTypes.string
export const bylinePropType = PropTypes.string
export const htmlPropType = PropTypes.string
export const imagePropType = PropTypes.string
export const publicAtPropType = PropTypes.string /* UTC as string */
export const titlePropType = PropTypes.string
export const isLivePropType = PropTypes.bool
export const videoUrlPropType = PropTypes.string
export const videoMimePropType = PropTypes.string

/* compound interfaces ------------------------------ */
export const articlePropTypes = {
  slug: slugPropType,
  authors: PropTypes.arrayOf(PropTypes.shape(authorPropTypes)),
  html: htmlPropType,
  publicAt: publicAtPropType,
  title: titlePropType,
  thumbnails: PropTypes.shape(thumbnailPropTypes),
  squareThumbnails: PropTypes.shape(squareThumbnailPropTypes)
}

export const cheddarShowPropTypes = {
  slug: slugPropType,
  publishedAt: publicAtPropType,
  title: titlePropType,
}

export const articlePropType = PropTypes.shape(articlePropTypes)

export const authorPropTypes = { byline: bylinePropType }
export const thumbnailPropTypes = { medium: imagePropType }
export const squareThumbnailPropTypes = { small: imagePropType }
export const videoPropType = { url: videoUrlPropType, mime: videoMimePropType }
export const videoFilePropTypes = {
  isLive: isLivePropType,
  videoUrls: PropTypes.arrayOf(PropTypes.shape(videoPropType))
}
export const authorPropType = PropTypes.shape(authorPropTypes)