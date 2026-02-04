import iconNode from '../iconNodes/unlike.node.json'
import metaData from '../../../../icons/unlike.json'
import releaseData from '../releaseMetadata/unlike.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'unlike',
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
  