import iconNode from '../iconNodes/file-processed.node.json'
import metaData from '../../../../icons/file-processed.json'
import releaseData from '../releaseMetadata/file-processed.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'file-processed',
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
  