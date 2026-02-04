import iconNode from '../iconNodes/lampbulb.node.json'
import metaData from '../../../../icons/lampbulb.json'
import releaseData from '../releaseMetadata/lampbulb.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'lampbulb',
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
  