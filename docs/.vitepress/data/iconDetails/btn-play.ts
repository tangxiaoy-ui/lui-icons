import iconNode from '../iconNodes/btn-play.node.json'
import metaData from '../../../../icons/btn-play.json'
import releaseData from '../releaseMetadata/btn-play.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'btn-play',
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
  