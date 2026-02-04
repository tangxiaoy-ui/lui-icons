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

const iconNode: IconNode = [["path",{"d":"M5 0C7.76142 0 10 2.23858 10 5C10 6.20064 9.57644 7.30213 8.87109 8.16406L11.8535 11.1465L11.1465 11.8535L8.16406 8.87109C7.30213 9.57644 6.20064 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0ZM5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1Z","fill":"#666666"}]];

/**
 * @component @name Search
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSAwQzcuNzYxNDIgMCAxMCAyLjIzODU4IDEwIDVDMTAgNi4yMDA2NCA5LjU3NjQ0IDcuMzAyMTMgOC44NzEwOSA4LjE2NDA2TDExLjg1MzUgMTEuMTQ2NUwxMS4xNDY1IDExLjg1MzVMOC4xNjQwNiA4Ljg3MTA5QzcuMzAyMTMgOS41NzY0NCA2LjIwMDY0IDEwIDUgMTBDMi4yMzg1OCAxMCAwIDcuNzYxNDIgMCA1QzAgMi4yMzg1OCAyLjIzODU4IDAgNSAwWk01IDFDMi43OTA4NiAxIDEgMi43OTA4NiAxIDVDMSA3LjIwOTE0IDIuNzkwODYgOSA1IDlDNy4yMDkxNCA5IDkgNy4yMDkxNCA5IDVDOSAyLjc5MDg2IDcuMjA5MTQgMSA1IDFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/search
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 * 
 */
</script>

<Icon name="search" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
