import iconNode from '../iconNodes/arrow-double-right.node.json'
import metaData from '../../../../icons/arrow-double-right.json'
import releaseData from '../releaseMetadata/arrow-double-right.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'arrow-double-right',
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
  