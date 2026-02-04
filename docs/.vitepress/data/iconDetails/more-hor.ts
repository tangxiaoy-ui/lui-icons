import iconNode from '../iconNodes/more-hor.node.json'
import metaData from '../../../../icons/more-hor.json'
import releaseData from '../releaseMetadata/more-hor.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'more-hor',
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
  