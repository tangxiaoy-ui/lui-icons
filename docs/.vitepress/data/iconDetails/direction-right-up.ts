import iconNode from '../iconNodes/direction-right-up.node.json'
import metaData from '../../../../icons/direction-right-up.json'
import releaseData from '../releaseMetadata/direction-right-up.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'direction-right-up',
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
  