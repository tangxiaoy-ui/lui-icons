import iconNode from '../iconNodes/file-add.node.json'
import metaData from '../../../../icons/file-add.json'
import releaseData from '../releaseMetadata/file-add.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'file-add',
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
  