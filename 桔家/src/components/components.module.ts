import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BComponent } from './b/b';
import { Component1Component } from './component1/component1';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
@NgModule({
	declarations: [AComponent,
    BComponent,
    Component1Component],
    imports: [
        BrowserModule,
        IonicModule.forRoot(ComponentsModule)
    ],
	exports: [AComponent,
    BComponent,
    Component1Component]
})
export class ComponentsModule {}
