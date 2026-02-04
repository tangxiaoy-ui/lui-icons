import iconNode from '../iconNodes/level-parent.node.json'
import metaData from '../../../../icons/level-parent.json'
import releaseData from '../releaseMetadata/level-parent.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'level-parent',
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
  