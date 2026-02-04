import iconNode from '../iconNodes/sign-exclamatory.node.json'
import metaData from '../../../../icons/sign-exclamatory.json'
import releaseData from '../releaseMetadata/sign-exclamatory.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'sign-exclamatory',
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
  