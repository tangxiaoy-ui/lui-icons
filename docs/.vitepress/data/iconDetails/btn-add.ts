import iconNode from '../iconNodes/btn-add.node.json'
import metaData from '../../../../icons/btn-add.json'
import releaseData from '../releaseMetadata/btn-add.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'btn-add',
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
  