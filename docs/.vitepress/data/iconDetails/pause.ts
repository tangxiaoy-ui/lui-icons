import iconNode from '../iconNodes/pause.node.json'
import metaData from '../../../../icons/pause.json'
import releaseData from '../releaseMetadata/pause.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'pause',
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
  