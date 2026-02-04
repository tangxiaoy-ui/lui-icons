import iconNode from '../iconNodes/data-import.node.json'
import metaData from '../../../../icons/data-import.json'
import releaseData from '../releaseMetadata/data-import.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'data-import',
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
  