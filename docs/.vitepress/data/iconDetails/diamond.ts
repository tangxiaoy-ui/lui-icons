import iconNode from '../iconNodes/diamond.node.json'
import metaData from '../../../../icons/diamond.json'
import releaseData from '../releaseMetadata/diamond.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'diamond',
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
  