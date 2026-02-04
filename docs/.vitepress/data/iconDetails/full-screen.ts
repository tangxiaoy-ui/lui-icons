import iconNode from '../iconNodes/full-screen.node.json'
import metaData from '../../../../icons/full-screen.json'
import releaseData from '../releaseMetadata/full-screen.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'full-screen',
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
  