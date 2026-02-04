import iconNode from '../iconNodes/menu-list.node.json'
import metaData from '../../../../icons/menu-list.json'
import releaseData from '../releaseMetadata/menu-list.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'menu-list',
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
  