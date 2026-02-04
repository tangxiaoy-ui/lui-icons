import iconNode from '../iconNodes/collection.node.json'
import metaData from '../../../../icons/collection.json'
import releaseData from '../releaseMetadata/collection.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'collection',
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
  