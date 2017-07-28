export * from '@angular/common';
export * from '@angular/common/http';
export * from '@angular/platform-browser';
export * from '@angular/platform-browser-dynamic'
export * from '@angular/router';
export * from '@angular/compiler';
export * from '@angular/core';
export * from '@angular/forms';

/*
Since this modules will autoexecute when importing the vendor
and require the browser environment to work we cannot import them
here or angular modules could not be exported from the vendor module
therefore we need to create an 'angular-live-deps' package that
takes care of these modules and is required in the app

import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'rxjs/Rx';

**/
