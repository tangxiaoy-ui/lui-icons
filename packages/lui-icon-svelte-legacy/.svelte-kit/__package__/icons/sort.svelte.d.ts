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
export type SortProps = typeof __propDef.props;
export type SortEvents = typeof __propDef.events;
export type SortSlots = typeof __propDef.slots;
export default class Sort extends SvelteComponentTyped<SortProps, SortEvents, SortSlots> {
}
export {};
