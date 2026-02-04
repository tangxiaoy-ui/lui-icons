import iconNode from '../iconNodes/data-permission.node.json'
import metaData from '../../../../icons/data-permission.json'
import releaseData from '../releaseMetadata/data-permission.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'data-permission',
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
  