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
export type ArrowDoubleLeftProps = typeof __propDef.props;
export type ArrowDoubleLeftEvents = typeof __propDef.events;
export type ArrowDoubleLeftSlots = typeof __propDef.slots;
export default class ArrowDoubleLeft extends SvelteComponentTyped<ArrowDoubleLeftProps, ArrowDoubleLeftEvents, ArrowDoubleLeftSlots> {
}
export {};
