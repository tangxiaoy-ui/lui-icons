import iconNode from '../iconNodes/edit.node.json'
import metaData from '../../../../icons/edit.json'
import releaseData from '../releaseMetadata/edit.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'edit',
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
  