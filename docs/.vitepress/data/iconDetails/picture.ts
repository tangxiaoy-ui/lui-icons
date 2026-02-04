import iconNode from '../iconNodes/picture.node.json'
import metaData from '../../../../icons/picture.json'
import releaseData from '../releaseMetadata/picture.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'picture',
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
  