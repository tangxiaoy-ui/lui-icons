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
export type SignPoundProps = typeof __propDef.props;
export type SignPoundEvents = typeof __propDef.events;
export type SignPoundSlots = typeof __propDef.slots;
export default class SignPound extends SvelteComponentTyped<SignPoundProps, SignPoundEvents, SignPoundSlots> {
}
export {};
