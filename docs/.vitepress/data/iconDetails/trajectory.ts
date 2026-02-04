import iconNode from '../iconNodes/trajectory.node.json'
import metaData from '../../../../icons/trajectory.json'
import releaseData from '../releaseMetadata/trajectory.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'trajectory',
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
  