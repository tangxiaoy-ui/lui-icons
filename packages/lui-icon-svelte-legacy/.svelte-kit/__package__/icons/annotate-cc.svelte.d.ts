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
export type AnnotateCcProps = typeof __propDef.props;
export type AnnotateCcEvents = typeof __propDef.events;
export type AnnotateCcSlots = typeof __propDef.slots;
export default class AnnotateCc extends SvelteComponentTyped<AnnotateCcProps, AnnotateCcEvents, AnnotateCcSlots> {
}
export {};
