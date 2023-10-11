import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { NgMaterialTooltipComponent } from './tooltip';
import { NgMatTooltipModule } from '../../ng-mat-tooltip.module';
import { NgMaterialButtonModule } from '../../ng-mat-button.module';

const meta: Meta<NgMaterialTooltipComponent> = {
  component: NgMaterialTooltipComponent,
  title: 'Components/Tooltip',
  decorators: [
    moduleMetadata({
      imports: [NgMatTooltipModule, NgMaterialButtonModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<NgMaterialTooltipComponent>;

export const Tooltip: Story = {
  parameters: {
    storySource: {
      source: `
      <button ng-mat-tooltip id="sameRequiredId">Hover me</button>

      <div ng-mat-tooltip id="sameRequiredId" [showDelay]="100" [hideDelay]="100" [xPosition]="XPosition.Below" [yPosition]="XPosition.Center" >Some label</div>

        //Require the import of NgMatTooltipModule from libs/angular
        //XPosition, YPosition form '@material/tooltip'
        //I does not update dynamic properties as properties get initialized one by a script in AfterViewInit
      `,
    },
  },
  render: (args) => ({
    props: args,
    template: `<button ng-mat-tooltip id="sameRequiredId">Hover me</button>
      <div ng-mat-tooltip id="sameRequiredId" >{{label}}</div>
    `,
  }),
  args: {
    label: 'Some label',
  },
};
