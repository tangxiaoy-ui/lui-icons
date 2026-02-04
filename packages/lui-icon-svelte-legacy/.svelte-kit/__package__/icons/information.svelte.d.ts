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
export type InformationProps = typeof __propDef.props;
export type InformationEvents = typeof __propDef.events;
export type InformationSlots = typeof __propDef.slots;
export default class Information extends SvelteComponentTyped<InformationProps, InformationEvents, InformationSlots> {
}
export {};
