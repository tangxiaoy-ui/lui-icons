import iconNode from '../iconNodes/sort-drag.node.json'
import metaData from '../../../../icons/sort-drag.json'
import releaseData from '../releaseMetadata/sort-drag.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'sort-drag',
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
  