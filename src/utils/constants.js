export const LOGO_URL="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_AVATAR="https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXMrBpySF8XZ8sCkWvT8aguR_wkRNG3R8T7iwBTsIkMyYwlB6it3SFUkQreUS4BP7yzuo542K7ZoPtOd13o6SbNT3mRrFQA.png?r=6a6"

export const MORE_INFO="https://cdn-icons-png.flaticon.com/128/10446/10446866.png"

export const PLAY_INFO="https://cdn-icons-png.flaticon.com/128/27/27223.png"

export const DROP_DOWN_ICON="https://cdn-icons-png.flaticon.com/128/8213/8213476.png"

export const DROP_UP_ICON="https://cdn-icons-png.flaticon.com/128/8213/8213544.png"

export const LEFT_ARROW="https://cdn-icons-png.flaticon.com/128/8213/8213500.png"

export const RIGHT_ARROW="https://cdn-icons-png.flaticon.com/128/8213/8213522.png"
export const IMG_CDN="https://image.tmdb.org/t/p/w500"


export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg"

export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+process.env.REACT_APP_TMDB_KEY
    }
  };

  export const SUPPORTED_LANGUAGE=[{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}]


   export const OPEN_AI_KEY=process.env.REACT_APP_OPEN_AI_KEY