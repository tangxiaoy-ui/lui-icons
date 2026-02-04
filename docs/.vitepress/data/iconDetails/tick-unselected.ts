import iconNode from '../iconNodes/tick-unselected.node.json'
import metaData from '../../../../icons/tick-unselected.json'
import releaseData from '../releaseMetadata/tick-unselected.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'tick-unselected',
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
  