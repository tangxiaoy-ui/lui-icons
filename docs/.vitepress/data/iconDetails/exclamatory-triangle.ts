import iconNode from '../iconNodes/exclamatory-triangle.node.json'
import metaData from '../../../../icons/exclamatory-triangle.json'
import releaseData from '../releaseMetadata/exclamatory-triangle.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'exclamatory-triangle',
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
  