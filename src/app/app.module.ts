import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WheelSpinComponent } from './wheel-spin/wheel-spin.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SpecificCourseComponent } from './specific-course/specific-course.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { SpecificContentComponent } from './specific-content/specific-content.component';
import { ScratchCardComponent } from './scratch-card/scratch-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizComponentComponent } from "./quiz-component/quiz-component.component";
import { StackblitzComponent } from './stackblitz/stackblitz.component';
import { EventsComponent } from './events/events.component';
import { WheelQuizComponent } from './wheel-quiz/wheel-quiz.component';
import { SidebarModule } from 'primeng/sidebar';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { CardsComponent } from './cards/cards.component';
import { SplitterModule } from 'primeng/splitter';
import {ToastModule} from 'primeng/toast';
import { GitComponent } from './git/git.component';
import { ClipboardModule } from 'ngx-clipboard';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { TestadminjsonComponent } from './testadminjson/testadminjson.component';
import { MonacotestComponent } from './monacotest/monacotest.component';
import { HtmlcomplierComponent } from './htmlcomplier/htmlcomplier.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WheelSpinComponent,
    HomeBodyComponent,
    SpecificCourseComponent,
    SpecificContentComponent,
    ScratchCardComponent,
    QuizComponentComponent,
    StackblitzComponent,
    EventsComponent, WheelQuizComponent,
     MarkdownEditorComponent,
     CardsComponent,GitComponent, TextEditorComponent, TestadminjsonComponent, MonacotestComponent, HtmlcomplierComponent

  ],
  imports: [
    BrowserModule,
    CheckboxModule,
    BrowserAnimationsModule
    ,SidebarModule,ClipboardModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MenubarModule,
    NgbModule,
    NgbAccordionModule,
    DragDropModule,
    MatButtonModule,
    MatCardModule,
    SplitterModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
