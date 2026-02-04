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
export type SortFilterDownProps = typeof __propDef.props;
export type SortFilterDownEvents = typeof __propDef.events;
export type SortFilterDownSlots = typeof __propDef.slots;
export default class SortFilterDown extends SvelteComponentTyped<SortFilterDownProps, SortFilterDownEvents, SortFilterDownSlots> {
}
export {};
