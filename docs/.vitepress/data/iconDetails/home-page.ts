import iconNode from '../iconNodes/home-page.node.json'
import metaData from '../../../../icons/home-page.json'
import releaseData from '../releaseMetadata/home-page.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'home-page',
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
  