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
export type SortDragProps = typeof __propDef.props;
export type SortDragEvents = typeof __propDef.events;
export type SortDragSlots = typeof __propDef.slots;
export default class SortDrag extends SvelteComponentTyped<SortDragProps, SortDragEvents, SortDragSlots> {
}
export {};
