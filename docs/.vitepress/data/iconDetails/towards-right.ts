import iconNode from '../iconNodes/towards-right.node.json'
import metaData from '../../../../icons/towards-right.json'
import releaseData from '../releaseMetadata/towards-right.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'towards-right',
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
  