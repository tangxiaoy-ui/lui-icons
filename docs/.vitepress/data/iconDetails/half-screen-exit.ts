import iconNode from '../iconNodes/half-screen-exit.node.json'
import metaData from '../../../../icons/half-screen-exit.json'
import releaseData from '../releaseMetadata/half-screen-exit.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'half-screen-exit',
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
  