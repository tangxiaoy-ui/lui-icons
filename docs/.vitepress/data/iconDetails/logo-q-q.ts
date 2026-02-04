import iconNode from '../iconNodes/logo-q-q.node.json'
import metaData from '../../../../icons/logo-q-q.json'
import releaseData from '../releaseMetadata/logo-q-q.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'logo-q-q',
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
  