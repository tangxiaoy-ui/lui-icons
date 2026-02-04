import iconNode from '../iconNodes/string-type-float.node.json'
import metaData from '../../../../icons/string-type-float.json'
import releaseData from '../releaseMetadata/string-type-float.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'string-type-float',
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
  