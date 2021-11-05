const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

export const getMeme = async (name: string) => {
  await wait(1000);
  if (name.includes('doge')) {
    return {
      name: 'doge',
      url: 'https://c.tenor.com/lLBGctqxapYAAAAC/to-the-moon-space.gif',
      description:
        'TO THE MOON!',
    };
  }
  if (name.includes('elon')) {
    return {
      name: 'elon',
      url: 'https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2021/04/18/download-4-974840-1618716069.png?itok=hEdUuU_m',
      description:
        'I choose you! DOGE!',
    };
  }
  throw new Error('404');
};
