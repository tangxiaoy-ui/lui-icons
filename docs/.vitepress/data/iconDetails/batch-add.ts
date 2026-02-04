import iconNode from '../iconNodes/batch-add.node.json'
import metaData from '../../../../icons/batch-add.json'
import releaseData from '../releaseMetadata/batch-add.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'batch-add',
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
  