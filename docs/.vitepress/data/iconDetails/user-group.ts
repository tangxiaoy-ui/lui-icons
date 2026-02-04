import iconNode from '../iconNodes/user-group.node.json'
import metaData from '../../../../icons/user-group.json'
import releaseData from '../releaseMetadata/user-group.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'user-group',
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
  