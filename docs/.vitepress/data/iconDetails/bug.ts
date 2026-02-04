import iconNode from '../iconNodes/bug.node.json'
import metaData from '../../../../icons/bug.json'
import releaseData from '../releaseMetadata/bug.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'bug',
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
  