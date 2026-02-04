import iconNode from '../iconNodes/cross.node.json'
import metaData from '../../../../icons/cross.json'
import releaseData from '../releaseMetadata/cross.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'cross',
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
  