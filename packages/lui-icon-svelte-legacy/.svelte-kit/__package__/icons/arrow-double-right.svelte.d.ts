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
export type ArrowDoubleRightProps = typeof __propDef.props;
export type ArrowDoubleRightEvents = typeof __propDef.events;
export type ArrowDoubleRightSlots = typeof __propDef.slots;
export default class ArrowDoubleRight extends SvelteComponentTyped<ArrowDoubleRightProps, ArrowDoubleRightEvents, ArrowDoubleRightSlots> {
}
export {};
