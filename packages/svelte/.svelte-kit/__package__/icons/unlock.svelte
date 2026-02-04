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
const iconNode = [["path", { "d": "M9 0C10.5975 0 11.9036 1.24866 11.9951 2.82324L12 3H11C11 1.89543 10.1046 1 9 1C7.9457 1 7.08229 1.81581 7.00586 2.85059L7 3V4H8.5C9.32843 4 10 4.67157 10 5.5V10.5C10 11.3284 9.32843 12 8.5 12H1.5C0.671573 12 0 11.3284 0 10.5V5.5C0 4.67157 0.671573 4 1.5 4H6V3C6 1.34315 7.34315 0 9 0ZM1.5 5C1.22386 5 1 5.22386 1 5.5V10.5C1 10.7761 1.22386 11 1.5 11H8.5C8.77614 11 9 10.7761 9 10.5V5.5C9 5.22386 8.77614 5 8.5 5H1.5ZM5.5 9H4.5V7H5.5V9Z", "fill": "#666666" }]];
/**
 * @component @name Unlock
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOSAwQzEwLjU5NzUgMCAxMS45MDM2IDEuMjQ4NjYgMTEuOTk1MSAyLjgyMzI0TDEyIDNIMTFDMTEgMS44OTU0MyAxMC4xMDQ2IDEgOSAxQzcuOTQ1NyAxIDcuMDgyMjkgMS44MTU4MSA3LjAwNTg2IDIuODUwNTlMNyAzVjRIOC41QzkuMzI4NDMgNCAxMCA0LjY3MTU3IDEwIDUuNVYxMC41QzEwIDExLjMyODQgOS4zMjg0MyAxMiA4LjUgMTJIMS41QzAuNjcxNTczIDEyIDAgMTEuMzI4NCAwIDEwLjVWNS41QzAgNC42NzE1NyAwLjY3MTU3MyA0IDEuNSA0SDZWM0M2IDEuMzQzMTUgNy4zNDMxNSAwIDkgMFpNMS41IDVDMS4yMjM4NiA1IDEgNS4yMjM4NiAxIDUuNVYxMC41QzEgMTAuNzc2MSAxLjIyMzg2IDExIDEuNSAxMUg4LjVDOC43NzYxNCAxMSA5IDEwLjc3NjEgOSAxMC41VjUuNUM5IDUuMjIzODYgOC43NzYxNCA1IDguNSA1SDEuNVpNNS41IDlINC41VjdINS41VjlaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/unlock
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
</script>

<Icon name="unlock" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
