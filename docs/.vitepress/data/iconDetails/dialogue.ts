import iconNode from '../iconNodes/dialogue.node.json'
import metaData from '../../../../icons/dialogue.json'
import releaseData from '../releaseMetadata/dialogue.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'dialogue',
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
  