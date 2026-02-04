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
export type BtnChangeProps = typeof __propDef.props;
export type BtnChangeEvents = typeof __propDef.events;
export type BtnChangeSlots = typeof __propDef.slots;
export default class BtnChange extends SvelteComponentTyped<BtnChangeProps, BtnChangeEvents, BtnChangeSlots> {
}
export {};
