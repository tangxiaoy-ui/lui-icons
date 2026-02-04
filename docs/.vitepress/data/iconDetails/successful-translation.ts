import iconNode from '../iconNodes/successful-translation.node.json'
import metaData from '../../../../icons/successful-translation.json'
import releaseData from '../releaseMetadata/successful-translation.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'successful-translation',
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
  