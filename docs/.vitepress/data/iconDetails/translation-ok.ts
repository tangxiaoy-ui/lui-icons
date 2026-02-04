import iconNode from '../iconNodes/translation-ok.node.json'
import metaData from '../../../../icons/translation-ok.json'
import releaseData from '../releaseMetadata/translation-ok.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'translation-ok',
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
  