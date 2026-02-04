import { type FunctionalComponent, h } from 'vue';
import {
  mergeClasses,
  toKebabCase,
  toPascalCase,
  isEmptyString,
  hasA11yProp,
} from '@lui-icon/shared';
import defaultAttributes from './defaultAttributes';
import { IconNode, LUIIconProps } from './types';

interface IconProps {
  iconNode: IconNode;
  name: string;
}

const Icon: FunctionalComponent<LUIIconProps & IconProps> = (
  {
    name,
    iconNode,
    absoluteStrokeWidth,
    'absolute-stroke-width': absoluteStrokeWidthKebabCase,
    strokeWidth,
    'stroke-width': strokeWidthKebabCase,
    size = defaultAttributes.width,
    color = defaultAttributes.stroke,
    ...props
  },
  { slots },
) => {
  return h(
    'svg',
    {
      ...defaultAttributes,
      ...props,
      width: size,
      height: size,
      stroke: color,
      'stroke-width':
        isEmptyString(absoluteStrokeWidth) ||
        isEmptyString(absoluteStrokeWidthKebabCase) ||
        absoluteStrokeWidth === true ||
        absoluteStrokeWidthKebabCase === true
          ? (Number(strokeWidth || strokeWidthKebabCase || defaultAttributes['stroke-width']) *
              24) /
            Number(size)
          : strokeWidth || strokeWidthKebabCase || defaultAttributes['stroke-width'],
      class: mergeClasses(
        'lucide',
        props.class,
        ...(name
          ? [`lui-icon-${toKebabCase(toPascalCase(name))}-icon`, `lui-icon-${toKebabCase(name)}`]
          : ['lui-icon-icon']),
      ),
      ...(!slots.default && !hasA11yProp(props) && { 'aria-hidden': 'true' }),
    },
    [...iconNode.map((child) => h(...child)), ...(slots.default ? [slots.default()] : [])],
  );
};

export default Icon;
