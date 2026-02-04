import iconNode from '../iconNodes/checkin.node.json'
import metaData from '../../../../icons/checkin.json'
import releaseData from '../releaseMetadata/checkin.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'checkin',
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
  