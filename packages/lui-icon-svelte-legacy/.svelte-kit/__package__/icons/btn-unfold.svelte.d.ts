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
export type BtnUnfoldProps = typeof __propDef.props;
export type BtnUnfoldEvents = typeof __propDef.events;
export type BtnUnfoldSlots = typeof __propDef.slots;
export default class BtnUnfold extends SvelteComponentTyped<BtnUnfoldProps, BtnUnfoldEvents, BtnUnfoldSlots> {
}
export {};
