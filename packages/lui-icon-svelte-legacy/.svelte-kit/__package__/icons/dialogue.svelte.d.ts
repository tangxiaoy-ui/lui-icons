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
export type DialogueProps = typeof __propDef.props;
export type DialogueEvents = typeof __propDef.events;
export type DialogueSlots = typeof __propDef.slots;
export default class Dialogue extends SvelteComponentTyped<DialogueProps, DialogueEvents, DialogueSlots> {
}
export {};
