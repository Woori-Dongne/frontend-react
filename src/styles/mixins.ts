export const mixins = {
  flexBox: (jc = 'center', ai = 'center') => `
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    `,

  columnFlexBox: (jc = 'center', ai = 'center') => `
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction:column;
    `,
};
