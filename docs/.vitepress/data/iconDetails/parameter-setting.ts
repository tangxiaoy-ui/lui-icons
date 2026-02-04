import iconNode from '../iconNodes/parameter-setting.node.json'
import metaData from '../../../../icons/parameter-setting.json'
import releaseData from '../releaseMetadata/parameter-setting.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'parameter-setting',
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
  