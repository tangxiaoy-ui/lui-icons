import iconNode from '../iconNodes/delete.node.json'
import metaData from '../../../../icons/delete.json'
import releaseData from '../releaseMetadata/delete.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'delete',
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
  