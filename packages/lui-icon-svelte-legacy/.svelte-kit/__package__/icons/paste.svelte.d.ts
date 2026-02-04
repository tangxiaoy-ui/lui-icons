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
export type PasteProps = typeof __propDef.props;
export type PasteEvents = typeof __propDef.events;
export type PasteSlots = typeof __propDef.slots;
export default class Paste extends SvelteComponentTyped<PasteProps, PasteEvents, PasteSlots> {
}
export {};
