import iconNode from '../iconNodes/logo-wechat.node.json'
import metaData from '../../../../icons/logo-wechat.json'
import releaseData from '../releaseMetadata/logo-wechat.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'logo-wechat',
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
  