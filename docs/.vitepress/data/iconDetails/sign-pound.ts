import iconNode from '../iconNodes/sign-pound.node.json'
import metaData from '../../../../icons/sign-pound.json'
import releaseData from '../releaseMetadata/sign-pound.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'sign-pound',
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
  