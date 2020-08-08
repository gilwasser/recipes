import {moduleMetadata} from '@storybook/angular';
import {IconModule} from "../app/icon/icon.module";
import {IconComponent} from "../app/icon/icon.component";

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
