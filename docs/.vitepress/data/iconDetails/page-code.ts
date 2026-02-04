import iconNode from '../iconNodes/page-code.node.json'
import metaData from '../../../../icons/page-code.json'
import releaseData from '../releaseMetadata/page-code.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'page-code',
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
  