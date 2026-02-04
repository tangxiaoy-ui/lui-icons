import iconNode from '../iconNodes/emoticon.node.json'
import metaData from '../../../../icons/emoticon.json'
import releaseData from '../releaseMetadata/emoticon.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'emoticon',
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
  