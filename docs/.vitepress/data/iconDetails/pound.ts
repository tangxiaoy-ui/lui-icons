import iconNode from '../iconNodes/pound.node.json'
import metaData from '../../../../icons/pound.json'
import releaseData from '../releaseMetadata/pound.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'pound',
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
  