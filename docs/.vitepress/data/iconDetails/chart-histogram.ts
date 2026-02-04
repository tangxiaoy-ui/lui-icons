import iconNode from '../iconNodes/chart-histogram.node.json'
import metaData from '../../../../icons/chart-histogram.json'
import releaseData from '../releaseMetadata/chart-histogram.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'chart-histogram',
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
  