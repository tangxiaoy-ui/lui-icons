import iconNode from '../iconNodes/confirm.node.json'
import metaData from '../../../../icons/confirm.json'
import releaseData from '../releaseMetadata/confirm.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'confirm',
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
  