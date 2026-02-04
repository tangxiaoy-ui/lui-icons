import iconNode from '../iconNodes/data-export.node.json'
import metaData from '../../../../icons/data-export.json'
import releaseData from '../releaseMetadata/data-export.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'data-export',
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
  