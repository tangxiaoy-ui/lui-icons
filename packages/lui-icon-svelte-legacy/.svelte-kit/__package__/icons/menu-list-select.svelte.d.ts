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
export type MenuListSelectProps = typeof __propDef.props;
export type MenuListSelectEvents = typeof __propDef.events;
export type MenuListSelectSlots = typeof __propDef.slots;
export default class MenuListSelect extends SvelteComponentTyped<MenuListSelectProps, MenuListSelectEvents, MenuListSelectSlots> {
}
export {};
