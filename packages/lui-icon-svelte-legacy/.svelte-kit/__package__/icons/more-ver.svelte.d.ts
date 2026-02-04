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
export type MoreVerProps = typeof __propDef.props;
export type MoreVerEvents = typeof __propDef.events;
export type MoreVerSlots = typeof __propDef.slots;
export default class MoreVer extends SvelteComponentTyped<MoreVerProps, MoreVerEvents, MoreVerSlots> {
}
export {};
