import iconNode from '../iconNodes/cloud.node.json'
import metaData from '../../../../icons/cloud.json'
import releaseData from '../releaseMetadata/cloud.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'cloud',
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
  