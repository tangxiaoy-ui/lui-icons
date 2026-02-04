import iconNode from '../iconNodes/date-time.node.json'
import metaData from '../../../../icons/date-time.json'
import releaseData from '../releaseMetadata/date-time.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'date-time',
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
  