import iconNode from '../iconNodes/lock.node.json'
import metaData from '../../../../icons/lock.json'
import releaseData from '../releaseMetadata/lock.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'lock',
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
  