import iconNode from '../iconNodes/palette.node.json'
import metaData from '../../../../icons/palette.json'
import releaseData from '../releaseMetadata/palette.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'palette',
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
  