<script lang="ts">/**
 * @license @lui-icon/svelte v0.1.0 - ISC
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
import Icon from '../Icon.svelte';
let props = $props();
const iconNode = [["path", { "d": "M10 1C10.5523 1 11 1.67157 11 2.5V9.5C11 10.3284 10.5523 11 10 11H2C1.44772 11 1 10.3284 1 9.5V2.5C1 1.67157 1.44772 1 2 1H10ZM2.2998 2C2.13421 2.00018 2 2.22397 2 2.5V9.5C2 9.77603 2.13421 9.99982 2.2998 10H9.7002C9.86579 9.99982 10 9.77603 10 9.5V2.5C10 2.22397 9.86579 2.00018 9.7002 2H2.2998ZM4 9H3V8H4V9ZM7 3C7.55228 3 8 3.44772 8 4V8H9V9H5V8H7V4H6V3H7Z", "fill": "#666666" }]];
/**
 * @component @name StringTypeFloat
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMUMxMC41NTIzIDEgMTEgMS42NzE1NyAxMSAyLjVWOS41QzExIDEwLjMyODQgMTAuNTUyMyAxMSAxMCAxMUgyQzEuNDQ3NzIgMTEgMSAxMC4zMjg0IDEgOS41VjIuNUMxIDEuNjcxNTcgMS40NDc3MiAxIDIgMUgxMFpNMi4yOTk4IDJDMi4xMzQyMSAyLjAwMDE4IDIgMi4yMjM5NyAyIDIuNVY5LjVDMiA5Ljc3NjAzIDIuMTM0MjEgOS45OTk4MiAyLjI5OTggMTBIOS43MDAyQzkuODY1NzkgOS45OTk4MiAxMCA5Ljc3NjAzIDEwIDkuNVYyLjVDMTAgMi4yMjM5NyA5Ljg2NTc5IDIuMDAwMTggOS43MDAyIDJIMi4yOTk4Wk00IDlIM1Y4SDRWOVpNNyAzQzcuNTUyMjggMyA4IDMuNDQ3NzIgOCA0VjhIOVY5SDVWOEg3VjRINlYzSDdaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/string-type-float
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
</script>

<Icon name="string-type-float" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
