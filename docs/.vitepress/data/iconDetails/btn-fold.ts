import iconNode from '../iconNodes/btn-fold.node.json'
import metaData from '../../../../icons/btn-fold.json'
import releaseData from '../releaseMetadata/btn-fold.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'btn-fold',
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
  