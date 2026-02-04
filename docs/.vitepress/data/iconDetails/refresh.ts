import iconNode from '../iconNodes/refresh.node.json'
import metaData from '../../../../icons/refresh.json'
import releaseData from '../releaseMetadata/refresh.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'refresh',
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
  