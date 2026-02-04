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
export type SignMinusProps = typeof __propDef.props;
export type SignMinusEvents = typeof __propDef.events;
export type SignMinusSlots = typeof __propDef.slots;
export default class SignMinus extends SvelteComponentTyped<SignMinusProps, SignMinusEvents, SignMinusSlots> {
}
export {};
