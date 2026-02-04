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
export type SignEqualProps = typeof __propDef.props;
export type SignEqualEvents = typeof __propDef.events;
export type SignEqualSlots = typeof __propDef.slots;
export default class SignEqual extends SvelteComponentTyped<SignEqualProps, SignEqualEvents, SignEqualSlots> {
}
export {};
