import iconNode from '../iconNodes/keys.node.json'
import metaData from '../../../../icons/keys.json'
import releaseData from '../releaseMetadata/keys.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'keys',
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
  