import iconNode from '../iconNodes/upload.node.json'
import metaData from '../../../../icons/upload.json'
import releaseData from '../releaseMetadata/upload.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'upload',
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
  