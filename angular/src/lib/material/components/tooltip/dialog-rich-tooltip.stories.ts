import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { NgMatTooltipModule } from '../../ng-mat-tooltip.module';
import { NgMaterialDialogRichTooltipComponent } from './dialog-rich-tooltip';

const meta: Meta<NgMaterialDialogRichTooltipComponent> = {
  component: NgMaterialDialogRichTooltipComponent,
  title: 'Components/Tooltip',
  decorators: [
    moduleMetadata({
      imports: [NgMatTooltipModule],
    }),
  ],
  argTypes: {},
};
export default meta;
type Story = StoryObj<NgMaterialDialogRichTooltipComponent>;

export const DialogRichTooltip: Story = {
  parameters: {
    storySource: {
      source: `
      <button ng-mat-dialog-rich-tooltip id="someRequiredId" >Hover me</button>

        <ng-mat-dialog-rich-tooltip id="someRequiredId" [persistent]="false" [showDelay]="100" [hideDelay]="100" [xPosition]="XPosition.Below" [yPosition]="XPosition.Center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pretium vitae est et dapibus. Aenean sit amet felis eu lorem fermentum
          aliquam sit amet sit amet eros.
          <a ng-mat-tooltip-content-link  href="google.com">Some link</a>

          <button class="mdc-tooltip--rich-action">Action</button>

        </ng-mat-dialog-rich-tooltip>

        //Required the import of NgMatTooltipModule from libs/angular
          //XPosition, YPosition form '@material/tooltip'
        //I does not update dynamic properties as properties get initialized one by a script in AfterViewInit
      `,
    },
  },
  render: (args) => ({
    props: args,
    template: ` <button  ng-mat-dialog-rich-tooltip id="someRequiredId">Hover me</button>

    <ng-mat-dialog-rich-tooltip id="someRequiredId" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      pretium vitae est et dapibus. Aenean sit amet felis eu lorem fermentum
      aliquam sit amet sit amet eros.

      <a ng-mat-tooltip-content-link  href="google.com">Some link</a>

      <button class="mdc-tooltip--rich-action">Action</button>

    </ng-mat-dialog-rich-tooltip>`,
  }),
  args: {},
};
