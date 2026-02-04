import { h, type JSX } from 'preact';
import { mergeClasses, toKebabCase, toPascalCase } from '@lui-icon/shared';
import Icon from './Icon';
import type { IconNode, LUI-iconIcon, LUIIconProps } from './types';

/**
 * Create a LUI-icon icon component
 * @param {string} iconName
 * @param {array} iconNode
 * @returns {FunctionComponent} LUI-iconIcon
 */
const createLUIIcon = (iconName: string, iconNode: IconNode): LUI-iconIcon => {
  const Component = ({ class: classes = '', className = '', children, ...props }: LUIIconProps) =>
    h(
      Icon,
      {
        ...props,
        iconNode,
        class: mergeClasses<string | JSX.SignalLike<string | undefined>>(
          `lui-icon-${toKebabCase(toPascalCase(iconName))}`,
          `lui-icon-${toKebabCase(iconName)}`,
          classes,
          className,
        ),
      },
      children,
    );

  Component.displayName = toPascalCase(iconName);

  return Component;
};

export default createLUIIcon;
