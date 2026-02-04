import iconNode from '../iconNodes/btn-delete.node.json'
import metaData from '../../../../icons/btn-delete.json'
import releaseData from '../releaseMetadata/btn-delete.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'btn-delete',
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
  