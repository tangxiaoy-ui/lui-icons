import iconNode from '../iconNodes/logo-feishu.node.json'
import metaData from '../../../../icons/logo-feishu.json'
import releaseData from '../releaseMetadata/logo-feishu.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'logo-feishu',
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
  