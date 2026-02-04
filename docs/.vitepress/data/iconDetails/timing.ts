import iconNode from '../iconNodes/timing.node.json'
import metaData from '../../../../icons/timing.json'
import releaseData from '../releaseMetadata/timing.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'timing',
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
  