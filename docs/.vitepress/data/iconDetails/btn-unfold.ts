import iconNode from '../iconNodes/btn-unfold.node.json'
import metaData from '../../../../icons/btn-unfold.json'
import releaseData from '../releaseMetadata/btn-unfold.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'btn-unfold',
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
  