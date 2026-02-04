import iconNode from '../iconNodes/unlock.node.json'
import metaData from '../../../../icons/unlock.json'
import releaseData from '../releaseMetadata/unlock.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'unlock',
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
  