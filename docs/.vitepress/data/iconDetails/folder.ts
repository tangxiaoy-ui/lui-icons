import iconNode from '../iconNodes/folder.node.json'
import metaData from '../../../../icons/folder.json'
import releaseData from '../releaseMetadata/folder.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'folder',
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
  