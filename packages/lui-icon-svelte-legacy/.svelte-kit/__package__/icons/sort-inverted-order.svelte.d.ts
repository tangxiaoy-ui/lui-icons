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
export type SortInvertedOrderProps = typeof __propDef.props;
export type SortInvertedOrderEvents = typeof __propDef.events;
export type SortInvertedOrderSlots = typeof __propDef.slots;
export default class SortInvertedOrder extends SvelteComponentTyped<SortInvertedOrderProps, SortInvertedOrderEvents, SortInvertedOrderSlots> {
}
export {};
