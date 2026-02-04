import iconNode from '../iconNodes/exchange-udorder.node.json'
import metaData from '../../../../icons/exchange-udorder.json'
import releaseData from '../releaseMetadata/exchange-udorder.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'exchange-udorder',
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
  