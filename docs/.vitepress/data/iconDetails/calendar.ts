import iconNode from '../iconNodes/calendar.node.json'
import metaData from '../../../../icons/calendar.json'
import releaseData from '../releaseMetadata/calendar.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'calendar',
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
  