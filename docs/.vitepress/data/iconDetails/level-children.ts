import iconNode from '../iconNodes/level-children.node.json'
import metaData from '../../../../icons/level-children.json'
import releaseData from '../releaseMetadata/level-children.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'level-children',
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
  