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
export type DataPermissionProps = typeof __propDef.props;
export type DataPermissionEvents = typeof __propDef.events;
export type DataPermissionSlots = typeof __propDef.slots;
export default class DataPermission extends SvelteComponentTyped<DataPermissionProps, DataPermissionEvents, DataPermissionSlots> {
}
export {};
