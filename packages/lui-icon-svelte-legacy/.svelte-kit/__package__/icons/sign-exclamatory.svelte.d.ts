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
export type SignExclamatoryProps = typeof __propDef.props;
export type SignExclamatoryEvents = typeof __propDef.events;
export type SignExclamatorySlots = typeof __propDef.slots;
export default class SignExclamatory extends SvelteComponentTyped<SignExclamatoryProps, SignExclamatoryEvents, SignExclamatorySlots> {
}
export {};
