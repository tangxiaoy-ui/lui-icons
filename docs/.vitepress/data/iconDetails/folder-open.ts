import iconNode from '../iconNodes/folder-open.node.json'
import metaData from '../../../../icons/folder-open.json'
import releaseData from '../releaseMetadata/folder-open.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'folder-open',
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
  