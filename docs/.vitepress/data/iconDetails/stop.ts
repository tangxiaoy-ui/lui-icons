import iconNode from '../iconNodes/stop.node.json'
import metaData from '../../../../icons/stop.json'
import releaseData from '../releaseMetadata/stop.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'stop',
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
  