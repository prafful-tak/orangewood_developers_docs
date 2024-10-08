/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // documentationSidebar: [{type: 'autogenerated', dirName: '.'}],


  documentationSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'docs_1',
      items: ['doc_1/doc1_dummy1', 'doc_1/doc1_dummy2'],
    },
    {
      type: 'category',
      label: 'docs_2',
      items: ['doc_2/doc2_dummy1', 'doc_2/doc2_dummy2', 'doc_2/doc2_dummy3'],
    },
  ],

};

export default sidebars;
