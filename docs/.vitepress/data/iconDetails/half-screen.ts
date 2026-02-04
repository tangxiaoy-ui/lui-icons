import iconNode from '../iconNodes/half-screen.node.json'
import metaData from '../../../../icons/half-screen.json'
import releaseData from '../releaseMetadata/half-screen.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'half-screen',
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
  