import { createElement, forwardRef } from 'react';
import { mergeClasses, toKebabCase, toPascalCase } from '@lui-icon/shared';
import { IconNode, LUIIconProps } from './types';
import Icon from './Icon';

/**
 * Create a LUI-icon icon component
 * @param {string} iconName
 * @param {array} iconNode
 * @returns {ForwardRefExoticComponent} LUI-iconIcon
 */
const createLUIIcon = (iconName: string, iconNode: IconNode) => {
  const Component = forwardRef<SVGSVGElement, LUIIconProps>(({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lui-icon-${toKebabCase(toPascalCase(iconName))}`,
        `lui-icon-${iconName}`,
        className,
      ),
      ...props,
    }),
  );

  Component.displayName = toPascalCase(iconName);

  return Component;
};

export default createLUIIcon;
