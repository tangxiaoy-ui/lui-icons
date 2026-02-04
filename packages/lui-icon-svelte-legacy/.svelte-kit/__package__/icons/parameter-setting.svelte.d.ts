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
export type ParameterSettingProps = typeof __propDef.props;
export type ParameterSettingEvents = typeof __propDef.events;
export type ParameterSettingSlots = typeof __propDef.slots;
export default class ParameterSetting extends SvelteComponentTyped<ParameterSettingProps, ParameterSettingEvents, ParameterSettingSlots> {
}
export {};
