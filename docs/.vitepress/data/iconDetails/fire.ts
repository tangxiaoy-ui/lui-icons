import iconNode from '../iconNodes/fire.node.json'
import metaData from '../../../../icons/fire.json'
import releaseData from '../releaseMetadata/fire.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'fire',
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
  