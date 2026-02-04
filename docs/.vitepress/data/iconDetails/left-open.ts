import iconNode from '../iconNodes/left-open.node.json'
import metaData from '../../../../icons/left-open.json'
import releaseData from '../releaseMetadata/left-open.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'left-open',
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
  