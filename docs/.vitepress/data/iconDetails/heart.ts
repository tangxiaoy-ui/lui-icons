import iconNode from '../iconNodes/heart.node.json'
import metaData from '../../../../icons/heart.json'
import releaseData from '../releaseMetadata/heart.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'heart',
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
  