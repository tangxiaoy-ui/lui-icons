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
export type ShortProps = typeof __propDef.props;
export type ShortEvents = typeof __propDef.events;
export type ShortSlots = typeof __propDef.slots;
export default class Short extends SvelteComponentTyped<ShortProps, ShortEvents, ShortSlots> {
}
export {};
