import { h } from 'vue';
import type { FunctionalComponent } from 'vue';
import { IconNode, LUIIconProps } from './types';
import Icon from './Icon';

// Create interface extending SVGAttributes

/**
 * Create a LUI-icon icon component
 * @param {string} iconName
 * @param {array} iconNode
 * @returns {FunctionalComponent} LUI-iconIcon
 */
const createLUIIcon =
  (iconName: string, iconNode: IconNode): FunctionalComponent<LUIIconProps> =>
  (props, { slots, attrs }) =>
    h(
      Icon,
      {
        ...attrs,
        ...props,
        iconNode,
        name: iconName,
      },
      slots,
    );

export default createLUIIcon;
