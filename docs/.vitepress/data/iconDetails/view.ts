import iconNode from '../iconNodes/view.node.json'
import metaData from '../../../../icons/view.json'
import releaseData from '../releaseMetadata/view.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'view',
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
  