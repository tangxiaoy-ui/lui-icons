import iconNode from '../iconNodes/towards-up.node.json'
import metaData from '../../../../icons/towards-up.json'
import releaseData from '../releaseMetadata/towards-up.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'towards-up',
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
  