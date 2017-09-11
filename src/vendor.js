export * from '@angular/common';
export * from '@angular/common/http';
export * from '@angular/platform-browser';
export * from '@angular/platform-browser-dynamic'
export * from '@angular/router';
export * from '@angular/compiler';
export * from '@angular/core';
export * from '@angular/forms';

import 'reflect-metadata';
// zone.js main points to zone-node, import the browser one
import 'zone.js/dist/zone';
/**
 * Don't need to import rxjs since angular modules
 * will require the necesary rxjs modules when bundling.
 * import 'rxjs/Rx';
 */

