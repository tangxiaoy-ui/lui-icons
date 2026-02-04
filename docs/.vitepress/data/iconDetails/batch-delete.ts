import iconNode from '../iconNodes/batch-delete.node.json'
import metaData from '../../../../icons/batch-delete.json'
import releaseData from '../releaseMetadata/batch-delete.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'batch-delete',
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
  