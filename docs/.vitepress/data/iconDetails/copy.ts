import iconNode from '../iconNodes/copy.node.json'
import metaData from '../../../../icons/copy.json'
import releaseData from '../releaseMetadata/copy.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'copy',
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
  