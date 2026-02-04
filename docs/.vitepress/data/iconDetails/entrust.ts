import iconNode from '../iconNodes/entrust.node.json'
import metaData from '../../../../icons/entrust.json'
import releaseData from '../releaseMetadata/entrust.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'entrust',
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
  