import iconNode from '../iconNodes/sign-cross.node.json'
import metaData from '../../../../icons/sign-cross.json'
import releaseData from '../releaseMetadata/sign-cross.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'sign-cross',
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
  