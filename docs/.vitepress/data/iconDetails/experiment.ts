import iconNode from '../iconNodes/experiment.node.json'
import metaData from '../../../../icons/experiment.json'
import releaseData from '../releaseMetadata/experiment.json'

const { tags, categories, contributors, aliases, deprecated, deprecationReason, toBeRemovedInVersion } = metaData

const iconDetails = {
  name: 'experiment',
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
  