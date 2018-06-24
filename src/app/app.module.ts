import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadModule } from "angular2-image-upload";
import { AngularWebStorageModule } from 'angular-web-storage';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { InstructorComponent } from './instructor/instructor.component';
import { CoursesComponent } from './courses/courses.component';
import { WrkspcProfileComponent } from './wrkspc-profile/wrkspc-profile.component';
import { WrkspcCrsComponent } from './wrkspc-crs/wrkspc-crs.component';
import { FormCourseComponent } from './form-course/form-course.component';
import { UploadsListComponent } from './uploads/uploads-list/uploads-list.component';
import { UploadDetailComponent } from './uploads/upload-detail/upload-detail.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { AdminInstructorComponent } from './admin-instructor/admin-instructor.component';
import { WrkspaceAdminComponent } from './wrkspace-admin/wrkspace-admin.component';
import { CourseAdminComponent } from './course-admin/course-admin.component';
import { MyRequestComponent } from './my-request/my-request.component';
import { SecApproveComponent } from './sec-approve/sec-approve.component';
import { ShwReqComponent } from './shw-req/shw-req.component';
import { AcceptShwReqComponent } from './accept-shw-req/accept-shw-req.component';

import { DataService } from './data.service';
import { TransferService } from './transfer.service';
import { CategoryService } from './category.service';
import { UserloginComponent } from './userlogin/userlogin.component';




const routes: Routes = [
	{ path:'', component:HomeComponent },
	{ path:'Signup', component: SignupComponent },
	{ path:'SignIn', component: SignInComponent },
	{ path:'Admin', component: AdminComponent },
	{ path:'profile', component: WrkspcProfileComponent },
	{ path:'instructor', component: InstructorComponent },
	{ path:'courses', component: CoursesComponent },
	{ path:'WrkspcCrs/:id', component: WrkspcCrsComponent },
	{ path:'WrkspcCrs', component: WrkspcCrsComponent },
	{ path:'FormCourse', component: FormCourseComponent },
	{ path:'AdminInstructor', component: AdminInstructorComponent },
	{ path:'WrkspaceAdmin', component: WrkspaceAdminComponent },
	{ path:'CourseAdmin/:offeredCourseId/:workSpaceId', component: CourseAdminComponent },
	{ path:'CourseAdmin', component: CourseAdminComponent },
	{ path:'SecApprove', component: SecApproveComponent },
	{ path:'ShwReq', component: ShwReqComponent },
	{ path:'AcceptShwReq', component: AcceptShwReqComponent },
	{ path:'userLogin', component: UserloginComponent }
	
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
	HomeComponent,
	SignupComponent,
	SignInComponent,
	AdminComponent,
	FooterComponent,
	InstructorComponent,
	CoursesComponent,
	WrkspcProfileComponent,
	WrkspcCrsComponent,
	FormCourseComponent,
	UploadsListComponent,
	UploadDetailComponent,
	UploadFormComponent,
	AdminInstructorComponent,
	MyRequestComponent,
	WrkspaceAdminComponent,
	CourseAdminComponent,
	SecApproveComponent,
	ShwReqComponent,
	AcceptShwReqComponent,
	UserloginComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes),
	HttpClientModule,
	HttpModule,
	FormsModule,
	NgbModule.forRoot(),
	ImageUploadModule.forRoot(),
	AngularWebStorageModule
  ],
  providers: [DataService, TransferService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
