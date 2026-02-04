import iconNode from '../iconNodes/string-type-double.node.json'
import metaData from '../../../../icons/string-type-double.json'
import releaseData from '../releaseMetadata/string-type-double.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'string-type-double',
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
  