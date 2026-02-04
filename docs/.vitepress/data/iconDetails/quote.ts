import iconNode from '../iconNodes/quote.node.json'
import metaData from '../../../../icons/quote.json'
import releaseData from '../releaseMetadata/quote.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'quote',
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
  