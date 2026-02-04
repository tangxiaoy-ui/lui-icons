import iconNode from '../iconNodes/seal.node.json'
import metaData from '../../../../icons/seal.json'
import releaseData from '../releaseMetadata/seal.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'seal',
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
  