import iconNode from '../iconNodes/exchange-ud.node.json'
import metaData from '../../../../icons/exchange-ud.json'
import releaseData from '../releaseMetadata/exchange-ud.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'exchange-ud',
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
  