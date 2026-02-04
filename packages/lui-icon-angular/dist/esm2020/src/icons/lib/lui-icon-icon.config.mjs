import { Injectable } from '@angular/core';
import defaultAttributes from '../icons/constants/default-attributes';
import * as i0 from "@angular/core";
/**
 * A configuration service for Lucide icon components.
 *
 * You can inject this service, typically in AppComponent, and customize its property values in
 * order to provide default values for all the icons used in the application.
 */
export class LucideIconConfig {
    constructor() {
        this.color = defaultAttributes.stroke;
        this.size = defaultAttributes.width;
        this.strokeWidth = defaultAttributes['stroke-width'];
        this.absoluteStrokeWidth = false;
    }
}
LucideIconConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: LucideIconConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LucideIconConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: LucideIconConfig, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: LucideIconConfig, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHVpLWljb24taWNvbi5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2x1aS1pY29uLWljb24uY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxpQkFBaUIsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFFdEU7Ozs7O0dBS0c7QUFFSCxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBRUUsVUFBSyxHQUFXLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztRQUN6QyxTQUFJLEdBQVcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLGdCQUFXLEdBQVcsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEQsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO0tBQzdCOzs4R0FMWSxnQkFBZ0I7a0hBQWhCLGdCQUFnQixjQURILE1BQU07NEZBQ25CLGdCQUFnQjtrQkFENUIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZGVmYXVsdEF0dHJpYnV0ZXMgZnJvbSAnLi4vaWNvbnMvY29uc3RhbnRzL2RlZmF1bHQtYXR0cmlidXRlcyc7XG5cbi8qKlxuICogQSBjb25maWd1cmF0aW9uIHNlcnZpY2UgZm9yIEx1Y2lkZSBpY29uIGNvbXBvbmVudHMuXG4gKlxuICogWW91IGNhbiBpbmplY3QgdGhpcyBzZXJ2aWNlLCB0eXBpY2FsbHkgaW4gQXBwQ29tcG9uZW50LCBhbmQgY3VzdG9taXplIGl0cyBwcm9wZXJ0eSB2YWx1ZXMgaW5cbiAqIG9yZGVyIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCB0aGUgaWNvbnMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTHVjaWRlSWNvbkNvbmZpZyB7XG4gIGNvbG9yOiBzdHJpbmcgPSBkZWZhdWx0QXR0cmlidXRlcy5zdHJva2U7XG4gIHNpemU6IG51bWJlciA9IGRlZmF1bHRBdHRyaWJ1dGVzLndpZHRoO1xuICBzdHJva2VXaWR0aDogbnVtYmVyID0gZGVmYXVsdEF0dHJpYnV0ZXNbJ3N0cm9rZS13aWR0aCddO1xuICBhYnNvbHV0ZVN0cm9rZVdpZHRoID0gZmFsc2U7XG59XG4iXX0=