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
export type SortFilterUpProps = typeof __propDef.props;
export type SortFilterUpEvents = typeof __propDef.events;
export type SortFilterUpSlots = typeof __propDef.slots;
export default class SortFilterUp extends SvelteComponentTyped<SortFilterUpProps, SortFilterUpEvents, SortFilterUpSlots> {
}
export {};
