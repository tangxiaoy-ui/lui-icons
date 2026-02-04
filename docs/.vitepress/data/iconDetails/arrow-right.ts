import iconNode from '../iconNodes/arrow-right.node.json'
import metaData from '../../../../icons/arrow-right.json'
import releaseData from '../releaseMetadata/arrow-right.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'arrow-right',
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
  