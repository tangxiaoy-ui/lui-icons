import iconNode from '../iconNodes/paste.node.json'
import metaData from '../../../../icons/paste.json'
import releaseData from '../releaseMetadata/paste.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'paste',
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
  