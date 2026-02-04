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
export type BatchDeleteProps = typeof __propDef.props;
export type BatchDeleteEvents = typeof __propDef.events;
export type BatchDeleteSlots = typeof __propDef.slots;
export default class BatchDelete extends SvelteComponentTyped<BatchDeleteProps, BatchDeleteEvents, BatchDeleteSlots> {
}
export {};
