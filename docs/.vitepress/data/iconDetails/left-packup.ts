import iconNode from '../iconNodes/left-packup.node.json'
import metaData from '../../../../icons/left-packup.json'
import releaseData from '../releaseMetadata/left-packup.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'left-packup',
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
  