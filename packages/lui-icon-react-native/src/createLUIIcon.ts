import { forwardRef, createElement, FunctionComponent } from 'react';
import * as NativeSvg from 'react-native-svg';
import defaultAttributes, { childDefaultAttributes } from './defaultAttributes';
import { IconNode, LUI-iconIcon, LUIIconProps } from './types';

const createLUIIcon = (iconName: string, iconNode: IconNode): LUI-iconIcon => {
  const Component = forwardRef(
    (
      {
        color = 'currentColor',
        size = 24,
        strokeWidth = 2,
        absoluteStrokeWidth,
        children,
        'data-testid': dataTestId,
        ...rest
      }: LUIIconProps,
      ref,
    ) => {
      const customAttrs = {
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth,
        ...rest,
      };

      return createElement(
        NativeSvg.Svg as unknown as string,
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          'data-testid': dataTestId,
          ...customAttrs,
        },
        [
          ...iconNode.map(([tag, attrs]) => {
            const upperCasedTag = (tag.charAt(0).toUpperCase() +
              tag.slice(1)) as keyof typeof NativeSvg;
            // duplicating the attributes here because generating the OTA update bundles don't inherit the SVG properties from parent (codepush, expo-updates)
            return createElement(
              NativeSvg[upperCasedTag] as FunctionComponent<LUIIconProps>,
              { ...childDefaultAttributes, ...customAttrs, ...attrs } as LUIIconProps,
            );
          }),
          ...((Array.isArray(children) ? children : [children]) || []),
        ],
      );
    },
  );

  Component.displayName = `${iconName}`;

  return Component;
};

export default createLUIIcon;
