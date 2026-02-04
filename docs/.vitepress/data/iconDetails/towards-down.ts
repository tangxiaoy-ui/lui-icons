import iconNode from '../iconNodes/towards-down.node.json'
import metaData from '../../../../icons/towards-down.json'
import releaseData from '../releaseMetadata/towards-down.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'towards-down',
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
  