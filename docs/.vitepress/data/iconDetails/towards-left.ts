import iconNode from '../iconNodes/towards-left.node.json'
import metaData from '../../../../icons/towards-left.json'
import releaseData from '../releaseMetadata/towards-left.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'towards-left',
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
  