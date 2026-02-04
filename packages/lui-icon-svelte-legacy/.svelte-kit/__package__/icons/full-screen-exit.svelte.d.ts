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
export type FullScreenExitProps = typeof __propDef.props;
export type FullScreenExitEvents = typeof __propDef.events;
export type FullScreenExitSlots = typeof __propDef.slots;
export default class FullScreenExit extends SvelteComponentTyped<FullScreenExitProps, FullScreenExitEvents, FullScreenExitSlots> {
}
export {};
