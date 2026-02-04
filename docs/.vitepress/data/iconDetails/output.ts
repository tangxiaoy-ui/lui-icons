import iconNode from '../iconNodes/output.node.json'
import metaData from '../../../../icons/output.json'
import releaseData from '../releaseMetadata/output.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'output',
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
  