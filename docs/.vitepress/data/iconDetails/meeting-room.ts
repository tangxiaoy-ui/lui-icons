import iconNode from '../iconNodes/meeting-room.node.json'
import metaData from '../../../../icons/meeting-room.json'
import releaseData from '../releaseMetadata/meeting-room.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'meeting-room',
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
  