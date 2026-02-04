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
export type AnnotateSignProps = typeof __propDef.props;
export type AnnotateSignEvents = typeof __propDef.events;
export type AnnotateSignSlots = typeof __propDef.slots;
export default class AnnotateSign extends SvelteComponentTyped<AnnotateSignProps, AnnotateSignEvents, AnnotateSignSlots> {
}
export {};
