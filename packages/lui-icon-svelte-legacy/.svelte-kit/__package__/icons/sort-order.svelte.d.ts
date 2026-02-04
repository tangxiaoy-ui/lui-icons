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
export type SortOrderProps = typeof __propDef.props;
export type SortOrderEvents = typeof __propDef.events;
export type SortOrderSlots = typeof __propDef.slots;
export default class SortOrder extends SvelteComponentTyped<SortOrderProps, SortOrderEvents, SortOrderSlots> {
}
export {};
