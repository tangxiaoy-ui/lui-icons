import iconNode from '../iconNodes/arrow-down.node.json'
import metaData from '../../../../icons/arrow-down.json'
import releaseData from '../releaseMetadata/arrow-down.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'arrow-down',
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
  