import iconNode from '../iconNodes/btn-more.node.json'
import metaData from '../../../../icons/btn-more.json'
import releaseData from '../releaseMetadata/btn-more.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'btn-more',
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
  