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
export type SignTickProps = typeof __propDef.props;
export type SignTickEvents = typeof __propDef.events;
export type SignTickSlots = typeof __propDef.slots;
export default class SignTick extends SvelteComponentTyped<SignTickProps, SignTickEvents, SignTickSlots> {
}
export {};
