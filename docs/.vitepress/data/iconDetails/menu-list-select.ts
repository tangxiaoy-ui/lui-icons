import iconNode from '../iconNodes/menu-list-select.node.json'
import metaData from '../../../../icons/menu-list-select.json'
import releaseData from '../releaseMetadata/menu-list-select.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'menu-list-select',
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
  