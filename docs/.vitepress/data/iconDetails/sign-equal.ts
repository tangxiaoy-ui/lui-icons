import iconNode from '../iconNodes/sign-equal.node.json'
import metaData from '../../../../icons/sign-equal.json'
import releaseData from '../releaseMetadata/sign-equal.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'sign-equal',
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
  