import iconNode from '../iconNodes/tick.node.json'
import metaData from '../../../../icons/tick.json'
import releaseData from '../releaseMetadata/tick.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'tick',
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
  