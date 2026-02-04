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
export type BtnFoldProps = typeof __propDef.props;
export type BtnFoldEvents = typeof __propDef.events;
export type BtnFoldSlots = typeof __propDef.slots;
export default class BtnFold extends SvelteComponentTyped<BtnFoldProps, BtnFoldEvents, BtnFoldSlots> {
}
export {};
