import iconNode from '../iconNodes/logo-k-k.node.json'
import metaData from '../../../../icons/logo-k-k.json'
import releaseData from '../releaseMetadata/logo-k-k.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'logo-k-k',
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
  