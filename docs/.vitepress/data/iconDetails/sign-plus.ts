import iconNode from '../iconNodes/sign-plus.node.json'
import metaData from '../../../../icons/sign-plus.json'
import releaseData from '../releaseMetadata/sign-plus.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'sign-plus',
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
  