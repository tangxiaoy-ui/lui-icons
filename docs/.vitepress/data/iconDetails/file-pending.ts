import iconNode from '../iconNodes/file-pending.node.json'
import metaData from '../../../../icons/file-pending.json'
import releaseData from '../releaseMetadata/file-pending.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'file-pending',
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
  