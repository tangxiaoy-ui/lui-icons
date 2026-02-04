import iconNode from '../iconNodes/extport.node.json'
import metaData from '../../../../icons/extport.json'
import releaseData from '../releaseMetadata/extport.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'extport',
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
  