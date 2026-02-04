import iconNode from '../iconNodes/hide.node.json'
import metaData from '../../../../icons/hide.json'
import releaseData from '../releaseMetadata/hide.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'hide',
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
  