import iconNode from '../iconNodes/level-same.node.json'
import metaData from '../../../../icons/level-same.json'
import releaseData from '../releaseMetadata/level-same.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'level-same',
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
  