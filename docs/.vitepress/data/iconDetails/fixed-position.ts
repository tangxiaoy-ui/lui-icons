import iconNode from '../iconNodes/fixed-position.node.json'
import metaData from '../../../../icons/fixed-position.json'
import releaseData from '../releaseMetadata/fixed-position.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'fixed-position',
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
  