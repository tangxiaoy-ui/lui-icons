import iconNode from '../iconNodes/annotate-sign.node.json'
import metaData from '../../../../icons/annotate-sign.json'
import releaseData from '../releaseMetadata/annotate-sign.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'annotate-sign',
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
  