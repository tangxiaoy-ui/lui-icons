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
export type SignTickProps = typeof __propDef.props;
export type SignTickEvents = typeof __propDef.events;
export type SignTickSlots = typeof __propDef.slots;
/**
 * @component @name SignTick
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuMTQ2NSAyLjE0NjQ1TDExLjg1MzYgMi44NTM1NUw1LjU2MDY3IDkuMTQ2NDVDNS4wMTE0OSA5LjY5NTYyIDQuMTQyNDMgOS43Mjk5NCAzLjU1MzI3IDkuMjQ5NDJMMy40MzkzNSA5LjE0NjQ1TDAuMTQ2NDU0IDUuODUzNTVMMC44NTM1NjEgNS4xNDY0NUw0LjE0NjQ1IDguNDM5MzRDNC4zMjAwMiA4LjYxMjkxIDQuNTg5NDQgOC42MzIxOSA0Ljc4NDMxIDguNDk3MTlMNC44NTM1NiA4LjQzOTM0TDExLjE0NjUgMi4xNDY0NVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sign-tick
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class SignTick extends SvelteComponentTyped<SignTickProps, SignTickEvents, SignTickSlots> {
}
export {};
