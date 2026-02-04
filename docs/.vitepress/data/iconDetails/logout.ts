import iconNode from '../iconNodes/logout.node.json'
import metaData from '../../../../icons/logout.json'
import releaseData from '../releaseMetadata/logout.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'logout',
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
  