import iconNode from '../iconNodes/earthset.node.json'
import metaData from '../../../../icons/earthset.json'
import releaseData from '../releaseMetadata/earthset.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'earthset',
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
  