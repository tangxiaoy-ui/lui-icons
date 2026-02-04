import iconNode from '../iconNodes/string-type-blob.node.json'
import metaData from '../../../../icons/string-type-blob.json'
import releaseData from '../releaseMetadata/string-type-blob.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'string-type-blob',
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
  