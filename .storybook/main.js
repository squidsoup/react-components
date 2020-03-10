module.exports = {
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ],
  stories: ["../src/**/*.stories.(js|mdx)"]
};
