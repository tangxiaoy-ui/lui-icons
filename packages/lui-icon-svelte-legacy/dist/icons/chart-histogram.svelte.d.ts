/**
 * @license lui-icon-svelte-legacy v0.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2024, Tubiao Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
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
export type ChartHistogramProps = typeof __propDef.props;
export type ChartHistogramEvents = typeof __propDef.events;
export type ChartHistogramSlots = typeof __propDef.slots;
/**
 * @component @name ChartHistogram
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMTFIMFYxMEgxMlYxMVpNMi4yNSA1QzIuNjY0MjEgNSAzIDUuMzM1NzkgMyA1Ljc1VjguMjVDMyA4LjY2NDIxIDIuNjY0MjEgOSAyLjI1IDlIMC43NUMwLjMzNTc4NiA5IDAgOC42NjQyMSAwIDguMjVWNS43NUMwIDUuMzM1NzkgMC4zMzU3ODYgNSAwLjc1IDVIMi4yNVpNNi43NSAzQzcuMTY0MjEgMyA3LjUgMy4zMzU3OSA3LjUgMy43NVY4LjI1QzcuNSA4LjY2NDIxIDcuMTY0MjEgOSA2Ljc1IDlINS4yNUM0LjgzNTc5IDkgNC41IDguNjY0MjEgNC41IDguMjVWMy43NUM0LjUgMy4zMzU3OSA0LjgzNTc5IDMgNS4yNSAzSDYuNzVaTTExLjI1IDFDMTEuNjY0MiAxIDEyIDEuMzM1NzkgMTIgMS43NVY4LjI1QzEyIDguNjY0MjEgMTEuNjY0MiA5IDExLjI1IDlIOS43NUM5LjMzNTc5IDkgOSA4LjY2NDIxIDkgOC4yNVYxLjc1QzkgMS4zMzU3OSA5LjMzNTc5IDEgOS43NSAxSDExLjI1Wk0xIDhIMlY2SDFWOFpNNS41IDhINi41VjRINS41VjhaTTEwIDhIMTFWMkgxMFY4Wk0zIDRIMFYzSDNWNFpNNy41IDJIMFYxSDcuNVYyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/chart-histogram
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class ChartHistogram extends SvelteComponentTyped<ChartHistogramProps, ChartHistogramEvents, ChartHistogramSlots> {
}
export {};
