import iconNode from '../iconNodes/string-type-big-deciaml.node.json'
import metaData from '../../../../icons/string-type-big-deciaml.json'
import releaseData from '../releaseMetadata/string-type-big-deciaml.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'string-type-big-deciaml',
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
  