import iconNode from '../iconNodes/signin.node.json'
import metaData from '../../../../icons/signin.json'
import releaseData from '../releaseMetadata/signin.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'signin',
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
  