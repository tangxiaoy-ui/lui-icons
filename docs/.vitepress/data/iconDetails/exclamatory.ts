import iconNode from '../iconNodes/exclamatory.node.json'
import metaData from '../../../../icons/exclamatory.json'
import releaseData from '../releaseMetadata/exclamatory.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'exclamatory',
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
  