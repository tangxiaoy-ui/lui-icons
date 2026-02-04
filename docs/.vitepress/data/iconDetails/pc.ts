import iconNode from '../iconNodes/pc.node.json'
import metaData from '../../../../icons/pc.json'
import releaseData from '../releaseMetadata/pc.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'pc',
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
  