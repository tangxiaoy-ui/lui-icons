import iconNode from '../iconNodes/btn-change.node.json'
import metaData from '../../../../icons/btn-change.json'
import releaseData from '../releaseMetadata/btn-change.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'btn-change',
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
  