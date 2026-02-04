import iconNode from '../iconNodes/user-c-c-list.node.json'
import metaData from '../../../../icons/user-c-c-list.json'
import releaseData from '../releaseMetadata/user-c-c-list.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'user-c-c-list',
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
  