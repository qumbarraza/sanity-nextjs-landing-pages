export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d2fdee3dcea31cfc79506b8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f1jgvxk5',
                  apiId: 'bd8774d6-cc14-466c-ac3b-2f76bfb31837'
                },
                {
                  buildHookId: '5d2fdee3b1e18560009e0b50',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pqhnbcys',
                  apiId: '62911de1-523d-4ac3-bb7e-8edfc7a52281'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/qumbarraza/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pqhnbcys.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
