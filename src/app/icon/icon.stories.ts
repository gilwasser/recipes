import {moduleMetadata} from '@storybook/angular';
import {IconModule} from "./icon.module";
import {IconComponent} from "./icon.component";
import {BrowserModule} from "@angular/platform-browser";
import {MatIcon, MatIconModule} from "@angular/material/icon";

export default {
  title: "Icon",
  decorators: [
    moduleMetadata({
      imports: [IconModule]
    })
  ]
}

// default TaskList state
export const Default = () => ({
  component: IconComponent,
  template: `
  <div style="padding: 3rem">
    <app-icon ></app-icon>
  </div>
`,
  props: {

  },
});
