import { For, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import defaultAttributes from './defaultAttributes';
import { IconNode, LUI-iconProps } from './types';
import { hasA11yProp, mergeClasses, toKebabCase, toPascalCase } from '@lui-icon/shared';

interface IconProps {
  name?: string;
  iconNode: IconNode;
}

const Icon = (props: LUI-iconProps & IconProps) => {
  const [localProps, rest] = splitProps(props, [
    'color',
    'size',
    'strokeWidth',
    'children',
    'class',
    'name',
    'iconNode',
    'absoluteStrokeWidth',
  ]);

  return (
    <svg
      {...defaultAttributes}
      width={localProps.size ?? defaultAttributes.width}
      height={localProps.size ?? defaultAttributes.height}
      stroke={localProps.color ?? defaultAttributes.stroke}
      stroke-width={
        localProps.absoluteStrokeWidth
          ? (Number(localProps.strokeWidth ?? defaultAttributes['stroke-width']) * 24) /
            Number(localProps.size)
          : Number(localProps.strokeWidth ?? defaultAttributes['stroke-width'])
      }
      class={mergeClasses(
        'lui-icon',
        'lui-icon-icon',
        ...(localProps.name != null
          ? [
              `lui-icon-${toKebabCase(toPascalCase(localProps.name))}`,
              `lui-icon-${toKebabCase(localProps.name)}`,
            ]
          : []),
        localProps.class != null ? localProps.class : '',
      )}
      aria-hidden={!localProps.children && !hasA11yProp(rest) ? 'true' : undefined}
      {...rest}
    >
      <For each={localProps.iconNode}>
        {([elementName, attrs]) => {
          return (
            <Dynamic
              component={elementName}
              {...attrs}
            />
          );
        }}
      </For>
    </svg>
  );
};

export default Icon;
