import iconNode from '../iconNodes/earth.node.json'
import metaData from '../../../../icons/earth.json'
import releaseData from '../releaseMetadata/earth.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'earth',
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
  