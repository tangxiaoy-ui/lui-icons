import iconNode from '../iconNodes/tool.node.json'
import metaData from '../../../../icons/tool.json'
import releaseData from '../releaseMetadata/tool.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'tool',
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
  