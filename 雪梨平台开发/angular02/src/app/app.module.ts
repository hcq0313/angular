import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

import { RouterModule,Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { HttpClientModule } from "@angular/common/http";
import { TongbukedetailComponent } from './components/tongbukedetail/tongbukedetail.component';
import { APipe } from './a.pipe';
import { TaskComponent } from './components/task/task.component';
import { SynchroComponent } from './components/synchro/synchro.component';
import { KechengComponent } from './components/kecheng/kecheng.component';
import { TalkComponent } from './components/talk/talk.component';
import { NoticeComponent } from './components/notice/notice.component';
import { WeitijiaoComponent } from './components/weitijiao/weitijiao.component';
import { YiwanchengComponent } from './components/yiwancheng/yiwancheng.component';
import { YiwanjieComponent } from './components/yiwanjie/yiwanjie.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { ShequdetailsComponent } from './components/shequdetails/shequdetails.component';
import { JoinComponent } from './components/join/join.component';
import { StudyingComponent } from './components/studying/studying.component';
import { GuanzhuComponent } from './components/guanzhu/guanzhu.component';
import { LookedComponent } from './components/looked/looked.component';
import { DongtaiComponent } from './components/dongtai/dongtai.component';
import { WodezanComponent } from './components/wodezan/wodezan.component';
import { ShoucangComponent } from './components/shoucang/shoucang.component';
import { AiteComponent } from './components/aite/aite.component';
import { ShoudaozanComponent } from './components/shoudaozan/shoudaozan.component';
import { PinglunComponent } from './components/pinglun/pinglun.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbukedetailComponent,
    APipe,
    TaskComponent,
    SynchroComponent,
    KechengComponent,
    TalkComponent,
    NoticeComponent,
    WeitijiaoComponent,
    YiwanchengComponent,
    YiwanjieComponent,
    CoursedetailsComponent,
    ShequdetailsComponent,
    JoinComponent,
    StudyingComponent,
    GuanzhuComponent,
    LookedComponent,
    DongtaiComponent,
    WodezanComponent,
    ShoucangComponent,
    AiteComponent,
    ShoudaozanComponent,
    PinglunComponent,

   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[
        {path:'task',component:TaskComponent,children:[
          {path:'weitijiao',component:WeitijiaoComponent},
          {path:'yiwancheng',component:YiwanchengComponent},
          {path:'yiwanjie',component:YiwanjieComponent},
          {path:'',redirectTo:'weitijiao',pathMatch:'full'}
        ]},
        {path:'synchro',component:SynchroComponent,children:[
          {path:'join',component:JoinComponent},
          {path:'',redirectTo:'join',pathMatch:'full'}
        ]},
        {path:'kecheng',component:KechengComponent,children:[
          {path:'studying',component:StudyingComponent},
          {path:'guanzhu',component:GuanzhuComponent},
          {path:'looked',component:LookedComponent},
          {path:'',redirectTo:'studying',pathMatch:'full'}
        ]},
        {path:'talk',component:TalkComponent,children:[
          {path:'dongtai',component:DongtaiComponent},
          {path:'wodezan',component:WodezanComponent},
          {path:'shoucang',component:ShoucangComponent},
          {path:'',redirectTo:'dongtai',pathMatch:'full'}
        ]},
        {path:'notice',component:NoticeComponent,children:[
          {path:'aite',component:AiteComponent},
          {path:'shoudaozan',component:ShoudaozanComponent},
          {path:'pinglun',component:PinglunComponent},
          {path:'',redirectTo:'aite',pathMatch:'full'}
        ]},
        {path:'',redirectTo:'task',pathMatch:'full'}
      ]},
      {path:'tongbu/:courseId',component:TongbukedetailComponent},
      {path:'tongbu',component:TongbuComponent},
      {path:'course/:courseId',component:CoursedetailsComponent},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:'shequ/:courseId',component:ShequdetailsComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:ShequComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

