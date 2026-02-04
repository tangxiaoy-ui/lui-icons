import iconNode from '../iconNodes/arrow-left.node.json'
import metaData from '../../../../icons/arrow-left.json'
import releaseData from '../releaseMetadata/arrow-left.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'arrow-left',
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
  