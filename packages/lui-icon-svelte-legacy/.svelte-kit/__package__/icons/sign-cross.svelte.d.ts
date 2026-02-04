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
export type SignCrossProps = typeof __propDef.props;
export type SignCrossEvents = typeof __propDef.events;
export type SignCrossSlots = typeof __propDef.slots;
export default class SignCross extends SvelteComponentTyped<SignCrossProps, SignCrossEvents, SignCrossSlots> {
}
export {};
