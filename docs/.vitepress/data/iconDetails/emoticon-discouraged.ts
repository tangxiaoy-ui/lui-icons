import iconNode from '../iconNodes/emoticon-discouraged.node.json'
import metaData from '../../../../icons/emoticon-discouraged.json'
import releaseData from '../releaseMetadata/emoticon-discouraged.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'emoticon-discouraged',
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
  