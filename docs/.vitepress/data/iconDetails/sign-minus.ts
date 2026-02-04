import iconNode from '../iconNodes/sign-minus.node.json'
import metaData from '../../../../icons/sign-minus.json'
import releaseData from '../releaseMetadata/sign-minus.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'sign-minus',
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
  