import iconNode from '../iconNodes/quote-small.node.json'
import metaData from '../../../../icons/quote-small.json'
import releaseData from '../releaseMetadata/quote-small.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'quote-small',
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
  