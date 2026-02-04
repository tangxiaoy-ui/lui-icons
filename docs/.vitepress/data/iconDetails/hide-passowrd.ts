import iconNode from '../iconNodes/hide-passowrd.node.json'
import metaData from '../../../../icons/hide-passowrd.json'
import releaseData from '../releaseMetadata/hide-passowrd.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'hide-passowrd',
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
  