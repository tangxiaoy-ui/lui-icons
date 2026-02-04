import iconNode from '../iconNodes/sort-filter-down.node.json'
import metaData from '../../../../icons/sort-filter-down.json'
import releaseData from '../releaseMetadata/sort-filter-down.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'sort-filter-down',
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
  