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
export type SigninProps = typeof __propDef.props;
export type SigninEvents = typeof __propDef.events;
export type SigninSlots = typeof __propDef.slots;
export default class Signin extends SvelteComponentTyped<SigninProps, SigninEvents, SigninSlots> {
}
export {};
