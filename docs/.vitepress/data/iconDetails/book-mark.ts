import iconNode from '../iconNodes/book-mark.node.json'
import metaData from '../../../../icons/book-mark.json'
import releaseData from '../releaseMetadata/book-mark.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'book-mark',
  iconNode,
  contributors,
  tags,
  categories,
  aliases,
  deprecated,
  deprecationReason,
  toBeRemovedInVersion,
  ...releaseData,
}

export default iconDetails
  