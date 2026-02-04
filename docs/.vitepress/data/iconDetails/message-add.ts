import iconNode from '../iconNodes/message-add.node.json'
import metaData from '../../../../icons/message-add.json'
import releaseData from '../releaseMetadata/message-add.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'message-add',
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
  