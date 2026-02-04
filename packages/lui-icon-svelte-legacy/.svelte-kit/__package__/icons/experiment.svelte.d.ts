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
export type ExperimentProps = typeof __propDef.props;
export type ExperimentEvents = typeof __propDef.events;
export type ExperimentSlots = typeof __propDef.slots;
export default class Experiment extends SvelteComponentTyped<ExperimentProps, ExperimentEvents, ExperimentSlots> {
}
export {};
