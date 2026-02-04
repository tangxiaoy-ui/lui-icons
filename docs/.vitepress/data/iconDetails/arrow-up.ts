import iconNode from '../iconNodes/arrow-up.node.json'
import metaData from '../../../../icons/arrow-up.json'
import releaseData from '../releaseMetadata/arrow-up.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'arrow-up',
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
  