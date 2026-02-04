import iconNode from '../iconNodes/translation.node.json'
import metaData from '../../../../icons/translation.json'
import releaseData from '../releaseMetadata/translation.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'translation',
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
  