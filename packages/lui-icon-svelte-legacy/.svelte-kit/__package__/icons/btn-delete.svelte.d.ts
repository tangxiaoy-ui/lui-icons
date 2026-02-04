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
export type BtnDeleteProps = typeof __propDef.props;
export type BtnDeleteEvents = typeof __propDef.events;
export type BtnDeleteSlots = typeof __propDef.slots;
export default class BtnDelete extends SvelteComponentTyped<BtnDeleteProps, BtnDeleteEvents, BtnDeleteSlots> {
}
export {};
