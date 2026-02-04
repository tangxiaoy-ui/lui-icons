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
export type SignPlusProps = typeof __propDef.props;
export type SignPlusEvents = typeof __propDef.events;
export type SignPlusSlots = typeof __propDef.slots;
export default class SignPlus extends SvelteComponentTyped<SignPlusProps, SignPlusEvents, SignPlusSlots> {
}
export {};
