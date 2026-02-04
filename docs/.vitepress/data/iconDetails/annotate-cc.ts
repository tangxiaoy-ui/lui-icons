import iconNode from '../iconNodes/annotate-cc.node.json'
import metaData from '../../../../icons/annotate-cc.json'
import releaseData from '../releaseMetadata/annotate-cc.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'annotate-cc',
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
  