import iconNode from '../iconNodes/data-switch.node.json'
import metaData from '../../../../icons/data-switch.json'
import releaseData from '../releaseMetadata/data-switch.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'data-switch',
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
  