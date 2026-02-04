import { SvelteComponentTyped } from "svelte";
import type { IconProps } from '../types.js';
declare const __propDef: {
    props: IconProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type MenuListProps = typeof __propDef.props;
export type MenuListEvents = typeof __propDef.events;
export type MenuListSlots = typeof __propDef.slots;
export default class MenuList extends SvelteComponentTyped<MenuListProps, MenuListEvents, MenuListSlots> {
}
export {};
