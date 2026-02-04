import iconNode from '../iconNodes/arrow-double-left.node.json'
import metaData from '../../../../icons/arrow-double-left.json'
import releaseData from '../releaseMetadata/arrow-double-left.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'arrow-double-left',
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
  