import iconNode from '../iconNodes/erase.node.json'
import metaData from '../../../../icons/erase.json'
import releaseData from '../releaseMetadata/erase.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'erase',
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
  