import iconNode from '../iconNodes/full-screen-exit.node.json'
import metaData from '../../../../icons/full-screen-exit.json'
import releaseData from '../releaseMetadata/full-screen-exit.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'full-screen-exit',
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
  