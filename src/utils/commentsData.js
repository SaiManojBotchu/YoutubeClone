export const commentsData = [
  // First comment has 3 replies. Any reply can be nested to N-level

  // 1st comment
  {
    name: 'sandeep',
    text: 'Mollit tempor sunt non in sunt sit veniam.',
    replies: []
  },

  // 2nd comment
  {
    name: 'preetam',
    text: 'Incididunt exercitation nisi aute deserunt veniam aliqua cillum non dolore irure',
    replies: [
      {
        name: 'varun',
        text: 'Dolor ea occaecat incididunt mollit nisi sit elit.',
        replies: []
      },
      {
        name: 'jacob',
        text: 'Cillum anim ullamco mollit consequat quis velit exercitation adipisicing ex culpa ex sint.',
        replies: []
      },
      /*nesting comments 3rd reply for the first comment*/
      {
        name: 'Carl',
        text: 'Duis occaecat magna fugiat proident veniam ipsum magna pariatur sunt.',
        replies: [
          {
            name: 'Don',
            text: 'Amet nostrud culpa quis reprehenderit ipsum ea.',
            replies: []
          },
          {
            name: 'Kofi',
            text: 'Et deserunt adipisicing esse exercitation enim amet quis dolore occaecat amet.',
            replies: [
              {
                name: 'Cena',
                text: 'Minim commodo excepteur culpa deserunt in nisi anim qui exercitation amet ea minim velit laborum.',
                replies: []
              },
              {
                name: 'Geroge',
                text: 'Aute dolore excepteur irure dolore officia proident ex ipsum aute.',
                replies: [
                  {
                    name: 'Dale',
                    text: 'Mollit do Lorem sit eiusmod quis ut fugiat.',
                    replies: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // 3rd comment
  {
    name: 'Bharath',
    text: 'Lorem voluptate ea id velit sit.',
    replies: [
      {
        name: 'Aaron',
        text: 'Et ex anim adipisicing voluptate anim aliqua consequat.',
        replies: [
          {
            name: 'Mary',
            text: 'Id eu esse excepteur voluptate est.',
            replies: []
          },
          {
            name: 'Henry',
            text: 'Commodo est amet nostrud tempor Lorem ex nostrud nisi ex qui.',
            replies: [
              {
                name: 'Rajasekhar',
                text: 'Irure dolore cupidatat do aute voluptate voluptate nostrud nisi cupidatat adipisicing voluptate deserunt ullamco.',
                replies: []
              },
              {
                name: 'David',
                text: 'Aliquip tempor minim sint cupidatat.',
                replies: [
                  {
                    name: 'Jacob',
                    text: 'Consequat excepteur cillum est ea veniam ea.',
                    replies: []
                  }
                ]
              },
              {
                name: 'Yuta',
                text: 'Elit veniam magna exercitation veniam consectetur laborum id Lorem consequat qui.',
                replies: []
              }
            ]
          }
        ]
      },
      {
        name: 'Jane',
        text: 'Aute non duis voluptate dolor exercitation ex cillum non cillum.',
        replies: []
      }
    ]
  },

  // 4th comment

  // 3rd comment
  {
    name: 'Swaroop',
    text: 'Lorem voluptate ea id velit sit.',
    replies: [
      {
        name: 'Tate',
        text: 'Et ex anim adipisicing voluptate anim aliqua consequat.',
        replies: [
          {
            name: 'Andrew',
            text: 'Id eu esse excepteur voluptate est.',
            replies: []
          },
          {
            name: 'Mitch',
            text: 'Commodo est amet nostrud tempor Lorem ex nostrud nisi ex qui.',
            replies: [
              {
                name: 'Kong',
                text: 'Irure dolore cupidatat do aute voluptate voluptate nostrud nisi cupidatat adipisicing voluptate deserunt ullamco.',
                replies: []
              },
              {
                name: 'Bhai',
                text: 'Aliquip tempor minim sint cupidatat.',
                replies: [
                  {
                    name: 'Tory',
                    text: 'Aute ex sunt et eu mollit excepteur esse laboris voluptate velit enim sit exercitation.',
                    replies: [
                      {
                        name: 'Mitch',
                        text: 'Sunt veniam dolor non laboris tempor.',
                        replies: [
                          {
                            name: 'Dwane',
                            text: 'Lorem laboris nostrud nostrud ea sit tempor sint voluptate.',
                            replies: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: 'Margaret',
                text: 'Elit veniam magna exercitation veniam consectetur laborum id Lorem consequat qui.',
                replies: []
              }
            ]
          }
        ]
      },
      {
        name: 'Brook',
        text: 'Aute non duis voluptate dolor exercitation ex cillum non cillum.',
        replies: []
      }
    ]
  }
];
