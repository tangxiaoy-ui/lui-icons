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
export type HalfScreenExitProps = typeof __propDef.props;
export type HalfScreenExitEvents = typeof __propDef.events;
export type HalfScreenExitSlots = typeof __propDef.slots;
export default class HalfScreenExit extends SvelteComponentTyped<HalfScreenExitProps, HalfScreenExitEvents, HalfScreenExitSlots> {
}
export {};
