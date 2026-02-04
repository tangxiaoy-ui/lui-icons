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
export type LogoKKProps = typeof __propDef.props;
export type LogoKKEvents = typeof __propDef.events;
export type LogoKKSlots = typeof __propDef.slots;
export default class LogoKK extends SvelteComponentTyped<LogoKKProps, LogoKKEvents, LogoKKSlots> {
}
export {};
