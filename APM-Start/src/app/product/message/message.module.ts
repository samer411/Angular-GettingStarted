import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessageComponent } from './message.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'message', component: MessageComponent, outlet: 'popup' },
    ]),
  ],
  declarations: [MessageComponent],
})
export class MessageModule {}
