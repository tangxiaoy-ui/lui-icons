<script lang="ts">
/**
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
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M6 0C7.65685 0 9 1.34315 9 3V4H9.5C10.3284 4 11 4.67157 11 5.5V10.5C11 11.3284 10.3284 12 9.5 12H2.5C1.67157 12 1 11.3284 1 10.5V5.5C1 4.67157 1.67157 4 2.5 4H3V3C3 1.34315 4.34315 0 6 0ZM2.5 5C2.22386 5 2 5.22386 2 5.5V10.5C2 10.7761 2.22386 11 2.5 11H9.5C9.77614 11 10 10.7761 10 10.5V5.5C10 5.22386 9.77614 5 9.5 5H2.5ZM6.5 9H5.5V7H6.5V9ZM6 1C4.89543 1 4 1.89543 4 3V4H8V3C8 1.9457 7.18419 1.08229 6.14941 1.00586L6 1Z","fill":"#666666"}]];

/**
 * @component @name Lock
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzcuNjU2ODUgMCA5IDEuMzQzMTUgOSAzVjRIOS41QzEwLjMyODQgNCAxMSA0LjY3MTU3IDExIDUuNVYxMC41QzExIDExLjMyODQgMTAuMzI4NCAxMiA5LjUgMTJIMi41QzEuNjcxNTcgMTIgMSAxMS4zMjg0IDEgMTAuNVY1LjVDMSA0LjY3MTU3IDEuNjcxNTcgNCAyLjUgNEgzVjNDMyAxLjM0MzE1IDQuMzQzMTUgMCA2IDBaTTIuNSA1QzIuMjIzODYgNSAyIDUuMjIzODYgMiA1LjVWMTAuNUMyIDEwLjc3NjEgMi4yMjM4NiAxMSAyLjUgMTFIOS41QzkuNzc2MTQgMTEgMTAgMTAuNzc2MSAxMCAxMC41VjUuNUMxMCA1LjIyMzg2IDkuNzc2MTQgNSA5LjUgNUgyLjVaTTYuNSA5SDUuNVY3SDYuNVY5Wk02IDFDNC44OTU0MyAxIDQgMS44OTU0MyA0IDNWNEg4VjNDOCAxLjk0NTcgNy4xODQxOSAxLjA4MjI5IDYuMTQ5NDEgMS4wMDU4Nkw2IDFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/lock
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 * 
 */
</script>

<Icon name="lock" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
