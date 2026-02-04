import iconNode from '../iconNodes/funnel.node.json'
import metaData from '../../../../icons/funnel.json'
import releaseData from '../releaseMetadata/funnel.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'funnel',
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
  