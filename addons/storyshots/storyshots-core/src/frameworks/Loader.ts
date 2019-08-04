type SupportedFramework = 'angular';

export type RenderTree = (story: any) => any;

export interface Loader {
  load: (
    options: any
  ) => {
    framework: SupportedFramework;
    renderTree: RenderTree;
    renderShallowTree: any;
    storybook: any;
  };
  test: (options: any) => boolean;
}
