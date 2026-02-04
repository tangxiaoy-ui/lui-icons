import iconNode from '../iconNodes/shutdown.node.json'
import metaData from '../../../../icons/shutdown.json'
import releaseData from '../releaseMetadata/shutdown.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'shutdown',
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
  