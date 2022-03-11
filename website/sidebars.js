/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  preEuropa: [
    {
      type: "category",
      label: "Introduction",
      collapsible: true,
      items: ["introduction/what_is", "introduction/vs"],
    },
    {
      type: "doc",
      id: "install",
    },
    {
      type: "category",
      label: "Learn Dagger",
      collapsible: true,
      collapsed: false,
      items: [
        "learn/what_is_cue",
        "learn/get-started",
        "learn/google-cloud-run",
        "learn/kubernetes",
        "learn/aws-cloudformation",
        "learn/github-actions",
        "learn/dev-cue-package",
        "learn/package-manager",
      ],
    },
    {
      type: "category",
      label: "Use Cases",
      collapsible: true,
      collapsed: true,
      items: ["use-cases/ci"],
    },
    {
      type: "category",
      label: "Universe - API Reference",
      collapsible: true,
      collapsed: true,
      // generate the sidebar for reference doc automatically
      items: [
        {
          type: "autogenerated",
          dirName: "reference",
        },
      ],
    },
    {
      type: "category",
      label: "Administrator Manual",
      collapsible: true,
      collapsed: true,
      items: ["administrator/operator-manual"],
    },
    {
      type: "link",
      label: "Dagger 0.2 ➡️",
      href: "/",
    },
  ],
  europa: [
    {
      type: "category",
      label: "Getting Started",
      collapsible: false,
      collapsed: false,
      items: ["getting-started/local-dev", "getting-started/ci-environment"],
    },
    {
      type: "category",
      label: "Core Concepts",
      collapsible: false,
      collapsed: false,
      items: [
        "core-concepts/plan",
        "core-concepts/client",
        "core-concepts/secrets",
        "core-concepts/container-images",
      ],
    },
    {
      type: "category",
      label: "Knowledge Base",
      collapsible: false,
      collapsed: false,
      items: [
        "knowledge-base/migrate-from-dagger-0.1",
        "learn/api",
        "use-cases/go-docker-swarm",
      ],
    },
    {
      type: "link",
      label: "⬅️ Dagger 0.1",
      href: "/1200/what/",
    },
  ],
};
