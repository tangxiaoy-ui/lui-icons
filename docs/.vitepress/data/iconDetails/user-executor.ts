import iconNode from '../iconNodes/user-executor.node.json'
import metaData from '../../../../icons/user-executor.json'
import releaseData from '../releaseMetadata/user-executor.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'user-executor',
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
  