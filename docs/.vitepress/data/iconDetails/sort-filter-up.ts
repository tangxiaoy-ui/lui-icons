import iconNode from '../iconNodes/sort-filter-up.node.json'
import metaData from '../../../../icons/sort-filter-up.json'
import releaseData from '../releaseMetadata/sort-filter-up.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'sort-filter-up',
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
  