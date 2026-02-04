import iconNode from '../iconNodes/setting.node.json'
import metaData from '../../../../icons/setting.json'
import releaseData from '../releaseMetadata/setting.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'setting',
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
  