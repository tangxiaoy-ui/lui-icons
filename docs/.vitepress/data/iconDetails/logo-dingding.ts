import iconNode from '../iconNodes/logo-dingding.node.json'
import metaData from '../../../../icons/logo-dingding.json'
import releaseData from '../releaseMetadata/logo-dingding.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'logo-dingding',
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
  