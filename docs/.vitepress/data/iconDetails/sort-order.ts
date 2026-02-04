import iconNode from '../iconNodes/sort-order.node.json'
import metaData from '../../../../icons/sort-order.json'
import releaseData from '../releaseMetadata/sort-order.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'sort-order',
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
  