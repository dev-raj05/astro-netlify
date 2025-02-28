import { s as sanityClient } from './page-ssr_BP2uGixO.mjs';

const visualEditingEnabled = true;
const token = "skZQ4VQ8Mnch1UmBqrHI8sjHWCU2VvzMrqD2F57s22C6Y3kQjSkr3bPPfUKSoxmuwI18BqrehxYtqzv7V6uvAlTKfsGAXyAqzCaWee8sQwvRjBI6NU6QBOBl8jfRgIrOndAT6JNu88dZnp7pRRMrtKADGB44Wqf4Ohphfmow6OS18Vuyk7bB";
async function loadQuery({
  query,
  params
}) {
  const perspective = "previewDrafts" ;
  const {
    result,
    resultSourceMap
  } = await sanityClient.fetch(query, params ?? {}, {
    filterResponse: false,
    perspective,
    resultSourceMap: "withKeyArraySelector" ,
    stega: visualEditingEnabled,
    ...{
      token
    } 
  });
  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective
  };
}

export { loadQuery as l };
