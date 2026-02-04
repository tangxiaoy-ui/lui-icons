import iconNode from '../iconNodes/string-type-long.node.json'
import metaData from '../../../../icons/string-type-long.json'
import releaseData from '../releaseMetadata/string-type-long.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'string-type-long',
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
  