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
export type SortProps = typeof __propDef.props;
export type SortEvents = typeof __propDef.events;
export type SortSlots = typeof __propDef.slots;
/**
 * @component @name Sort
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC42NDY0NSA3LjY0NjQ1TDkuMzUzNTUgOC4zNTM1NUw2LjcwNzExIDExQzYuMzQ2NjIgMTEuMzYwNSA1Ljc3OTM5IDExLjM4ODIgNS4zODcxIDExLjA4MzJMNS4yOTI4OSAxMUwyLjY0NjQ1IDguMzUzNTVMMy4zNTM1NSA3LjY0NjQ1TDYgMTAuMjkyOUw4LjY0NjQ1IDcuNjQ2NDVaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik01LjI5Mjg5IDFDNS42NTMzOCAwLjYzOTUxNyA2LjIyMDYxIDAuNjExNzg3IDYuNjEyOSAwLjkxNjgxMkw2LjcwNzExIDFMOS4zNTM1NSAzLjY0NjQ1TDguNjQ2NDUgNC4zNTM1NUw2IDEuNzA3MTFMMy4zNTM1NSA0LjM1MzU1TDIuNjQ2NDUgMy42NDY0NUw1LjI5Mjg5IDFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sort
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Sort extends SvelteComponentTyped<SortProps, SortEvents, SortSlots> {
}
export {};
