import iconNode from '../iconNodes/sign-tick.node.json'
import metaData from '../../../../icons/sign-tick.json'
import releaseData from '../releaseMetadata/sign-tick.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'sign-tick',
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
  