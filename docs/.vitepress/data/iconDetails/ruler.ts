import iconNode from '../iconNodes/ruler.node.json'
import metaData from '../../../../icons/ruler.json'
import releaseData from '../releaseMetadata/ruler.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'ruler',
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
  