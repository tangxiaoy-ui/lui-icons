import iconNode from '../iconNodes/restoredefault.node.json'
import metaData from '../../../../icons/restoredefault.json'
import releaseData from '../releaseMetadata/restoredefault.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'restoredefault',
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
  