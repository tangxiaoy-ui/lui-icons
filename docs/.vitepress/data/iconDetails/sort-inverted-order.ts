import iconNode from '../iconNodes/sort-inverted-order.node.json'
import metaData from '../../../../icons/sort-inverted-order.json'
import releaseData from '../releaseMetadata/sort-inverted-order.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'sort-inverted-order',
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
  