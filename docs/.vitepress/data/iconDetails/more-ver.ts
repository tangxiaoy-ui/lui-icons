import iconNode from '../iconNodes/more-ver.node.json'
import metaData from '../../../../icons/more-ver.json'
import releaseData from '../releaseMetadata/more-ver.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'more-ver',
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
  