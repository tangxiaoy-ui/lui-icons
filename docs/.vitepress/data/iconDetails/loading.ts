import iconNode from '../iconNodes/loading.node.json'
import metaData from '../../../../icons/loading.json'
import releaseData from '../releaseMetadata/loading.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'loading',
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
  